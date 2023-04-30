import { GameResult } from '../types/game-result.type';
import { GameResultsDetail } from './game-results-detail.interface';
import { Team } from './team.interface';

export interface ScoreTracking {
  Team: Team;
  Results: GameResult[];
  ResultsDetail: GameResultsDetail[];
  AvgPtsScored: number;
  AvgPtsConceded: number;
  ImgUrl: string;
}
