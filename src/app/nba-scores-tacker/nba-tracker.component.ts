import {
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { TeamDropdownItem } from 'src/app/nba-scores-tacker/shared/types/team-dropdown-item.type';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbaDataStorageService } from 'src/app/nba-scores-tacker/shared/services/nba-data-storage.service';
import { ScoresProviderService } from './shared/services/scores-provider.service';

@Component({
  selector: 'app-nba-tracker',
  templateUrl: './nba-tracker.component.html',
  styleUrls: ['./nba-tracker.component.css'],
})
export class NbaTrackerComponent implements OnInit, OnDestroy {
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
