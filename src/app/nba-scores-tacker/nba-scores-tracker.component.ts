import {
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbaDataStorageService } from './shared/services/nba-data-storage.service';
import { ScoresProviderService } from './shared/services/scores-provider.service';
import { TeamDropdownItem } from './shared/types/team-dropdown-item.type';

@Component({
  selector: 'app-nba-scores-tracker',
  templateUrl: './nba-scores-tracker.component.html',
  styleUrls: ['./nba-scores-tracker.component.css'],
})
export class NbaScoresTrackerComponent implements OnInit, OnDestroy {
  @ViewChild('tracker', { static: true }) tracker!: TemplateRef<Object>;
  @ViewChild('loader', { static: true }) loader!: TemplateRef<Object>;
  protected currentTemplate!: TemplateRef<Object>;
  protected teams: TeamDropdownItem[] = [];
  protected trackerForm: FormGroup;
  private teamsScoresSubscription: Subscription | undefined;
  private teamsSubscription: Subscription | undefined;

  constructor(
    private nbaData: NbaDataStorageService,
    protected scoresProvider: ScoresProviderService,
    private fb: FormBuilder
  ) {
    this.trackerForm = this.buildForm();
  }

  ngOnInit(): void {
    this.currentTemplate = this.loader;
    this.teamsSubscription = this.nbaData
      .GetNbaTeams()
      .subscribe((teamsFetched) => {
        this.teams = teamsFetched;
        this.currentTemplate = this.tracker;
      });
  }

  ngOnDestroy(): void {
    if (this.teamsSubscription) this.teamsSubscription.unsubscribe();
    if (this.teamsScoresSubscription)
      this.teamsScoresSubscription.unsubscribe();
  }

  public onTrackBtnClicked() {
    let teamSelect: number | undefined = this.trackerForm.value.teamSelect;
    if (!teamSelect || teamSelect === 0) return;
    this.teamsScoresSubscription = this.nbaData
      .GetTeamScores(+teamSelect)
      .subscribe((scores) => {
        if (scores) this.scoresProvider.ScoreProvided.next(scores);
      });
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      teamSelect: this.fb.control(undefined, Validators.required),
    });
  }
}
