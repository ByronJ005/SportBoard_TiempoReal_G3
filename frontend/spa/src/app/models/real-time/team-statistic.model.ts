export interface TeamStatistic {
    id: number;
    teamId: number;
    seasonId?: number;
    matchesPlayed: number;
    wins: number;
    losses: number;
    draws: number;
    goalsScored: number;
    goalsConceded: number;
    goalDifference: number;
    points: number;
  }