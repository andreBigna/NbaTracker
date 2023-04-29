import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScoreTracking } from 'src/app/interfaces/score-tracking.interface';
import { ScoresProviderService } from 'src/app/services/scores-provider/scores-provider.service';

@Component({
  selector: 'app-team-scores',
  templateUrl: './team-scores.component.html',
  styleUrls: ['./team-scores.component.css'],
})
export class TeamScoresComponent implements OnInit, OnDestroy {
  private scoresSubscription: Subscription | undefined;
  protected scores: ScoreTracking[] = [];

  constructor(protected scoresProvider: ScoresProviderService) {}

  ngOnInit(): void {
    this.scoresSubscription = this.scoresProvider.ScoreProvided.subscribe(
      (score) => {
        if (score) {
          let storedScore = this.scores.findIndex(
            (x) => x.Team.id === score.Team.id
          );
          if (storedScore > -1) this.scores.splice(storedScore, 1);
          this.scores.push(score);
        }
      }
    );
  }

  ngOnDestroy(): void {
    if (this.scoresSubscription) this.scoresSubscription.unsubscribe();
  }
}