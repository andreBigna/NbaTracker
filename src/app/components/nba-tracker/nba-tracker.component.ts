import {
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { TeamDropdownItem } from 'src/app/types/team-dropdown-item.type';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbaDataStorageService } from 'src/app/services/nba-data-storage/nba-data-storage.service';
import { ScoresProviderService } from 'src/app/services/scores-provider/scores-provider.service';

@Component({
  selector: 'app-nba-tracker',
  templateUrl: './nba-tracker.component.html',
  styleUrls: ['./nba-tracker.component.css'],
})
export class NbaTrackerComponent implements OnInit, OnDestroy {
  private teamsSubscription: Subscription | undefined;
  private teamsScoresSubscription: Subscription | undefined;
  protected teams: TeamDropdownItem[] = [];
  protected trackerForm: FormGroup;
  protected currentTemplate!: TemplateRef<Object>;
  @ViewChild('tracker', { static: true }) tracker!: TemplateRef<Object>;
  @ViewChild('loader', { static: true }) loader!: TemplateRef<Object>;

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
