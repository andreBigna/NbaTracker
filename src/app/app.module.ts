import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamScoresComponent } from './nba-scores-tacker/team-scores/team-scores.component';
import { NbaTrackerComponent } from './nba-scores-tacker/nba-tracker.component';
import { AppComponent } from './app.component';
import { TeamScoresDetailComponent } from './nba-scores-tacker/team-scores-detail/team-scores-detail.component';
import { TeamScoresHeaderComponent } from './nba-scores-tacker/team-scores-header/team-scores-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NbaTrackerComponent,
    TeamScoresComponent,
    TeamScoresDetailComponent,
    TeamScoresHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
