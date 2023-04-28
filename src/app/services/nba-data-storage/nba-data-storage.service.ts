import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Game } from 'src/app/interfaces/game.interface';
import { RapidApiResponse } from 'src/app/interfaces/rapid-api-response.interface';
import { ScoreTracking } from 'src/app/interfaces/score-tracking.interface';
import { Team } from 'src/app/interfaces/team.interface';
import { TeamDropdownItem } from 'src/app/types/team-dropdown-item.type';

@Injectable({
  providedIn: 'root',
})
export class NbaDataStorageService {
  constructor(protected http: HttpClient) {}
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
        })
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
          if (!response.data || response.data.length === 0) return null;

          let scores: ScoreTracking = {
            team: this.gameHomePlayed(response.data[0], teamId)
              ? response.data[0].home_team
              : response.data[0].visitor_team,
            AvgPtsConceded: 0,
            AvgPtsScored: 0,
            results: [],
          };

          let ptsScored: number;
          let ptsConceded: number;
          response.data.forEach((x) => {
            ptsScored = this.gameHomePlayed(x, teamId)
              ? x.home_team_score
              : x.visitor_team_score;
            ptsConceded = this.gameHomePlayed(x, teamId)
              ? x.visitor_team_score
              : x.home_team_score;
            scores.AvgPtsConceded += ptsConceded;
            scores.AvgPtsScored += ptsScored;
            scores.results.push(ptsScored > ptsConceded ? 'W' : 'L');
          });

          scores.AvgPtsConceded = scores.AvgPtsConceded / response.data.length;
          scores.AvgPtsScored = scores.AvgPtsScored / response.data.length;
          return scores;
        })
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

  private gameHomePlayed(game: Game, teamId: Number): boolean {
    return game.home_team.id === teamId;
  }
}
