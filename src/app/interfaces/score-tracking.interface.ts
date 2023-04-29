import { GameResult } from '../types/game-result.type';
import { Team } from './team.interface';

export interface ScoreTracking {
  Team: Team;
  Results: GameResult[];
  AvgPtsScored: number;
  AvgPtsConceded: number;
  ImgUrl: string;
}
