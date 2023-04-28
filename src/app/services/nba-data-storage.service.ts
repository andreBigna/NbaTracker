import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TeamDropdownItem } from '../types/team-dropdown-item.type';
import { RapidApiResponse } from '../interfaces/rapid-api-response.interface';
import { Team } from '../interfaces/team.interface';

@Injectable({
  providedIn: 'root',
})
export class NbaDataStorageService {
  constructor(protected http: HttpClient) {}
  private baseUrl: Readonly<string> = 'https://free-nba.p.rapidapi.com/';

  public GetNbaTeams(): Observable<TeamDropdownItem[]> {
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
    });
    return this.http
      .get<RapidApiResponse<Team>>(`${this.baseUrl}teams`, {
        headers: headers,
      })
      .pipe(
        map((responseData) => {
          let teams: TeamDropdownItem[] = [];
          if (responseData.data && responseData.data.length > 0) {
            responseData.data.forEach((x) => {
              teams.push({ id: x.id, full_name: x.full_name });
            });
          }
          return teams;
        })
      );
  }

  // public GetGamesByTeam;
}
