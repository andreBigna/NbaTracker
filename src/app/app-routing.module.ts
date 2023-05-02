import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbaTrackerComponent } from './nba-scores-tacker/nba-tracker.component';
import { TeamScoresDetailComponent } from './nba-scores-tacker/team-scores-detail/team-scores-detail.component';

const routes: Routes = [
  {
    path: '',
    component: NbaTrackerComponent,
  },
  {
    path: 'results/:teamCode',
    component: TeamScoresDetailComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
