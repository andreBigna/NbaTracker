import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ScoresProviderService } from '../shared/services/scores-provider.service';
import { ScoreTracking } from '../shared/models/score-tracking.model';

@Component({
  selector: 'nba-scores-detail',
  templateUrl: './nba-scores-detail.component.html',
  styleUrls: ['./nba-scores-detail.component.css'],
})
export class NbaScoresDetailComponent implements OnInit, OnDestroy {
  protected score: ScoreTracking | undefined;
  private paramsSubscription: Subscription | undefined;
  private teamCode = '';

  constructor(
    private route: ActivatedRoute,
    protected scoresProvider: ScoresProviderService
  ) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.teamCode = params['teamCode'];
      if (this.teamCode && this.teamCode !== '') {
        this.score = this.scoresProvider.GetResultsDetailByTeamCode(
          this.teamCode
        );
      }
    });
  }

  ngOnDestroy(): void {
    if (this.paramsSubscription) this.paramsSubscription.unsubscribe();
  }
}
