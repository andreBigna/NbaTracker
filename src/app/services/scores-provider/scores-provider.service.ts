import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ScoreTracking } from 'src/app/interfaces/score-tracking.interface';

@Injectable({
  providedIn: 'root',
})
export class ScoresProviderService {
  public ScoreProvided = new Subject<ScoreTracking>();

  constructor() {}
}
