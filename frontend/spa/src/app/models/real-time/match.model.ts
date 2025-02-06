import { Team } from './team.model';
import { Event } from './event.model';
import { MatchStatus } from './match-status.model';
import { Season } from './season.model';

export interface Match {
    id: number;
    status: MatchStatus | string;
    homeTeamId: number;
    awayTeamId: number;
    seasonId?: number;
    season? : Season
    homeTeam?: Team;
    awayTeam?: Team;
    date: Date | string;
    goalsHome: number;
    goalsAway: number;
    events?: Event[];
  }