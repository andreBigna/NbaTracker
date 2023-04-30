import { Component, Input } from '@angular/core';
import { Team } from 'src/app/interfaces/team.interface';

@Component({
  selector: 'app-team-scores-header',
  templateUrl: './team-scores-header.component.html',
  styleUrls: ['./team-scores-header.component.css'],
})
export class TeamScoresHeaderComponent {
  @Input('team') Team: Team | undefined;
}
