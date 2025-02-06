import { Team } from './team.model';

export interface Coach {
    id: number;
    name: string;
    startDate: Date | string;
    historicalTeams?: Team[];
    currentTeamId?: number;
    currentTeam?: Team;
  }