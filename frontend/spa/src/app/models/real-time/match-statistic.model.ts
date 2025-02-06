import { TeamMatchStatistic } from './team-match-statistic.model';

export interface MatchStatistic {
    id: number;
    matchId: number;
    homeTeamStatsId: number;
    awayTeamStatsId: number;
    homeTeamStats?: TeamMatchStatistic;
    awayTeamStats?: TeamMatchStatistic;
  }