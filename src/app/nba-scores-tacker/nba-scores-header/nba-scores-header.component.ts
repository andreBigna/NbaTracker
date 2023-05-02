import { Component, Input } from '@angular/core';
import { Team } from '../shared/models/team.model';

@Component({
  selector: 'nba-scores-header',
  templateUrl: './nba-scores-header.component.html',
  styleUrls: ['./nba-scores-header.component.css'],
})
export class NbaScoresHeaderComponent {
  @Input() team: Team | undefined = undefined;
}
