import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GameResultsDetail } from 'src/app/interfaces/game-results-detail.interface';
import { ScoreTracking } from 'src/app/interfaces/score-tracking.interface';

@Injectable({
  providedIn: 'root',
})
export class ScoresProviderService {
  public ScoreProvided = new Subject<ScoreTracking>();
  private scores: ScoreTracking[] = [];
  public get Scores(): ScoreTracking[] {
    return this.scores.slice();
  }

  constructor() {}

  public GetResultsDetailByTeamCode(
    teamCode: string
  ): ScoreTracking | undefined {
    return this.scores.find((x) => x.Team.abbreviation === teamCode);
  }

  public AddScore(score: ScoreTracking) {
    if (score) {
      let storedScore = this.scores.findIndex(
        (x) => x.Team.id === score.Team.id
      );
      if (storedScore > -1) this.scores.splice(storedScore, 1);
      this.scores.push(score);
    }
  }

  public RemoveScoreByIndex(index: number) {
    this.scores.splice(index, 1);
  }
}
