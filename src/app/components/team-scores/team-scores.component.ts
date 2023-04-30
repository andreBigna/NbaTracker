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

  constructor(protected scoresProvider: ScoresProviderService) {}

  ngOnInit(): void {
    this.scoresSubscription = this.scoresProvider.ScoreProvided.subscribe(
      (score) => {
        this.scoresProvider.AddScore(score);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.scoresSubscription) this.scoresSubscription.unsubscribe();
  }

  public RemoveScore(i: number) {
    this.scoresProvider.RemoveScoreByIndex(i);
  }
}
