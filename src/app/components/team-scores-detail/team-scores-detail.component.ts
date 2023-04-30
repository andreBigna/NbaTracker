import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ScoreTracking } from 'src/app/interfaces/score-tracking.interface';
import { ScoresProviderService } from 'src/app/services/scores-provider/scores-provider.service';

@Component({
  selector: 'app-team-scores-detail',
  templateUrl: './team-scores-detail.component.html',
  styleUrls: ['./team-scores-detail.component.css'],
})
export class TeamScoresDetailComponent implements OnInit, OnDestroy {
  private paramsSubscription: Subscription | undefined;
  private teamCode = '';
  protected score: ScoreTracking | undefined;

  constructor(
    protected scoresProvider: ScoresProviderService,
    private route: ActivatedRoute
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
