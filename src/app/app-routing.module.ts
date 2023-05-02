import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'nba-tracker',
    loadChildren: () =>
      import('./nba-scores-tacker/nba-scores-tracker.module').then(
        (m) => m.NbaScoresTrackerModuleModule
      ),
  },
  {
    path: '**',
    redirectTo: 'nba-tracker',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
