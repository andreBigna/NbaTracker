import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScoresProviderService } from '../shared/services/scores-provider.service';

@Component({
  selector: 'nba-scores',
  templateUrl: './nba-scores.component.html',
  styleUrls: ['./nba-scores.component.css'],
})
export class NbaScoresComponent implements OnInit, OnDestroy {
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
