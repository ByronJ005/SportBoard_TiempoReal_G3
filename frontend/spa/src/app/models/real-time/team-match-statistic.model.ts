export interface TeamMatchStatistic {
    id: number;
    teamId: number;
    matchId: number;
    shots: number;
    shotsToGoal: number;
    possession: number;
    passes: number;
    fouls: number;
    yellowCards: number;
    redCards: number; 
    offsides: number;
    corners: number;
  }