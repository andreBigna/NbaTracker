import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbaScoresTrackerComponent } from './nba-scores-tracker.component';
import { NbaScoresDetailComponent } from './nba-scores-detail/team-scores-detail.component';

const routes: Routes = [
  {
    path: '',
    component: NbaScoresTrackerComponent,
  },
  {
    path: 'results/:teamCode',
    component: NbaScoresDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NbaScoresTrackerRoutingModule {}
