import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbaScoresTrackerComponent } from './nba-scores-tracker.component';
import { NbaScoresDetailComponent } from './nba-scores-detail/team-scores-detail.component';
import { NbaScoresHeaderComponent } from './nba-scores-header/nba-scores-header.component';
import { NbaScoresComponent } from './nba-scores/nba-scores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbaScoresTrackerRoutingModule } from './nba-scores-tracker-routing.module';
import { ResultHighlighterDirective } from './shared/directives/result-highlighter.directive';

@NgModule({
  declarations: [
    NbaScoresTrackerComponent,
    NbaScoresComponent,
    NbaScoresDetailComponent,
    NbaScoresHeaderComponent,
    ResultHighlighterDirective,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbaScoresTrackerRoutingModule,
  ],
})
export class NbaScoresTrackerModuleModule {}
