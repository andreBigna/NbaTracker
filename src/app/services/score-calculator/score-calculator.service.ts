import { Injectable } from '@angular/core';
import { Game } from 'src/app/interfaces/game.interface';
import { ScoreTracking } from 'src/app/interfaces/score-tracking.interface';
import { Team } from 'src/app/interfaces/team.interface';

@Injectable({
  providedIn: 'root',
})
export class ScoreCalculatorService {
  constructor() {}

  public GetScoreTracking(games: Game[], teamId: number): ScoreTracking {
    let scores: ScoreTracking;
    let isHomePlayed: boolean;
    let ptsScored: number;
    let ptsConceded: number;

    isHomePlayed = games[0].home_team.id === teamId;

    scores = {
      Team: isHomePlayed ? games[0].home_team : games[0].visitor_team,
      AvgPtsConceded: 0,
      AvgPtsScored: 0,
      Results: [],
      ResultsDetail: [],
      ImgUrl: '',
    };

    games.forEach((x) => {
      ptsScored = isHomePlayed ? x.home_team_score : x.visitor_team_score;
      ptsConceded = isHomePlayed ? x.visitor_team_score : x.home_team_score;
      scores.AvgPtsConceded += ptsScored;
      scores.AvgPtsScored += ptsConceded;
      scores.Results.push(ptsScored > ptsConceded ? 'W' : 'L');
      scores.ResultsDetail.push({
        HomeTeam: x.home_team.abbreviation,
        HomeTeamPoints: x.home_team_score,
        VisitorTeam: x.visitor_team.abbreviation,
        VisitorTeamPoints: x.visitor_team_score,
      });
    });

    scores.AvgPtsConceded = scores.AvgPtsConceded / games.length;
    scores.AvgPtsScored = scores.AvgPtsScored / games.length;
    scores.ImgUrl = `https://interstate21.com/nba-logos/${scores.Team.abbreviation}.png`;

    return scores;
  }
}
