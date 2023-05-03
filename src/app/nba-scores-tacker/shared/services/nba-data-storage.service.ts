import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { HttpErrorHandlerService } from './../../../shared/htt-error-handler.service';
import { Game } from '../models/game.model';
import { RapidApiResponse } from '../../../shared/rapid-api-response.model';
import { ScoreTracking } from '../models/score-tracking.model';
import { Team } from '../models/team.model';
import { TeamDropdownItem } from '../types/team-dropdown-item.type';
import { ScoreCalculatorService } from './score-calculator.service';

@Injectable({
  providedIn: 'root',
})
export class NbaDataStorageService {
  constructor(
    private scoreCalc: ScoreCalculatorService,
    private errorHandler: HttpErrorHandlerService,
    protected http: HttpClient
  ) {}
  private baseUrl: Readonly<string> = 'https://free-nba.p.rapidapi.com/';
  private headers: HttpHeaders = new HttpHeaders({
    'X-RapidAPI-Key': '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
  });

  public GetNbaTeams(): Observable<TeamDropdownItem[]> {
    return this.http
      .get<RapidApiResponse<Team>>(`${this.baseUrl}teams`, {
        headers: this.headers,
      })
      .pipe(
        map((response) => {
          let teams: TeamDropdownItem[] = [];
          if (response.data && response.data.length > 0) {
            response.data.forEach((x) => {
              teams.push({ id: x.id, full_name: x.full_name });
            });
          }
          return teams;
        }),
        catchError(this.errorHandler.HandleError)
      );
  }

  public GetTeamScores(teamId: number): Observable<ScoreTracking | null> {
    return this.http
      .get<RapidApiResponse<Game>>(`${this.baseUrl}games`, {
        headers: this.headers,
        params: this.getGamesByTeamParameters(teamId),
      })
      .pipe(
        map((response) => {
          if (!response.data || response.data.length === 0) {
            alert('Sorry, no scores available for this team.');
            return null;
          }

          let scores: ScoreTracking = this.scoreCalc.GetScoreTracking(
            response.data,
            teamId
          );

          return scores;
        }),
        catchError(this.errorHandler.HandleError)
      );
  }

  private getGamesByTeamParameters(teamId: number): HttpParams {
    let currentDate = new Date();
    let params = new HttpParams();
    params = params.append('team_ids[]', teamId);
    params = params.append('dates[]', this.getFormattedDateParam(currentDate));

    for (let index = 1; index < 12; index++) {
      currentDate.setDate(currentDate.getDate() - 1);
      params = params.append(
        'dates[]',
        this.getFormattedDateParam(currentDate)
      );
    }

    return params;
  }

  private getFormattedDateParam(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }
}
