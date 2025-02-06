import { Team } from './team.model';
import { Position } from './position.model';

export interface Player {
    id: number;
    name: string;
    position: Position | string;
    photo?: string;
    historicalTeams?: Team[];
    currentTeamId?: number;
    currentTeam?: Team;
  }