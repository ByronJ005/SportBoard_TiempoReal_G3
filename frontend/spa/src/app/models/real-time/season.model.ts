import { Team } from './team.model';
import { MatchPhase } from './match-phase.model';

export interface Season {
    id: number;
    startDate: Date | string;
    endDate: Date | string;
    competitionId: number;
    currentPhaseInt: number;
    currentPhase: MatchPhase | string;
    totalRounds?: number;
    teams?: Team[];
  }