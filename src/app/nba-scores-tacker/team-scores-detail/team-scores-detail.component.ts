import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ScoreTracking } from 'src/app/nba-scores-tacker/shared/models/score-tracking.model';
import { ScoresProviderService } from '../shared/services/scores-provider.service';

@Component({
  selector: 'app-team-scores-detail',
  templateUrl: './team-scores-detail.component.html',
  styleUrls: ['./team-scores-detail.component.css'],
})
export class TeamScoresDetailComponent implements OnInit, OnDestroy {
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
