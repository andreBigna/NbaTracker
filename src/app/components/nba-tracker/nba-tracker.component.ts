import {
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NbaDataStorageService } from './../../services/nba-data-storage.service';
import { Subscription } from 'rxjs';
import { TeamDropdownItem } from 'src/app/types/team-dropdown-item.type';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nba-tracker',
  templateUrl: './nba-tracker.component.html',
  styleUrls: ['./nba-tracker.component.css'],
})
export class NbaTrackerComponent implements OnInit, OnDestroy {
  private teamsSubscription: Subscription | undefined;
  protected teams: TeamDropdownItem[] = [];
  protected trackerForm: FormGroup;
  protected currentTemplate!: TemplateRef<Object>;
  @ViewChild('tracker', { static: true }) tracker!: TemplateRef<Object>;
  @ViewChild('loader', { static: true }) loader!: TemplateRef<Object>;

  constructor(private nbaData: NbaDataStorageService, private fb: FormBuilder) {
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
  }

  public onTrackBtnClicked() {}

  private buildForm(): FormGroup {
    return this.fb.group({
      teamSelect: this.fb.control(undefined, Validators.required),
    });
  }
}
