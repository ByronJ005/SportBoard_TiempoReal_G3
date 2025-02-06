export interface PlayerMatchStatistic {
    id: number;
    playerId: number;
    matchId: number;
    minutesPlayed: number;
    goals: number;
    assists: number;
    fouls: number;
    yellowCards: number;
    redCards: number;
  }