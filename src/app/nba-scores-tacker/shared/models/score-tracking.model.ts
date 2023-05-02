import { GameResult } from '../types/game-result.type';
import { GameResultsDetail } from './game-results-detail.model';
import { Team } from './team.model';

export interface ScoreTracking {
  Team: Team;
  Results: GameResult[];
  ResultsDetail: GameResultsDetail[];
  AvgPtsScored: number;
  AvgPtsConceded: number;
  ImgUrl: string;
}
