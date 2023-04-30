import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamScoresDetailComponent } from '../components/team-scores-detail/team-scores-detail.component';
import { NbaTrackerComponent } from '../components/nba-tracker/nba-tracker.component';

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
