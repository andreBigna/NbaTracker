import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { NbaTrackerComponent } from './components/nba-tracker/nba-tracker.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamScoresComponent } from './components/team-scores/team-scores.component';
import { TeamScoresDetailComponent } from './components/team-scores-detail/team-scores-detail.component';
import { TeamScoresHeaderComponent } from './components/team-scores-header/team-scores-header.component';

@NgModule({
  declarations: [AppComponent, NbaTrackerComponent, TeamScoresComponent, TeamScoresDetailComponent, TeamScoresHeaderComponent],
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
