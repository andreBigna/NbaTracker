import { GameResult } from '../types/game-result.type';
import { Team } from './team.interface';

export interface ScoreTracking {
  team: Team;
  results: GameResult[];
  AvgPtsScored: number;
  AvgPtsConceded: number;
}
