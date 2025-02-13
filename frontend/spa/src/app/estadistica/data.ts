export const mockTeams = [
  {
    name: 'Real Madrid',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
  },
  {
    name: 'Manchester City',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
  },
  {
    name: 'Barcelona',
    logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
  },
  {
    name: 'Bayern Munich',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg',
  },
  {
    name: 'Liverpool',
    logo: 'https://upload.wikimedia.org/wikipedia/sco/0/0c/Liverpool_FC.svg',
  },
  {
    name: 'Paris Saint-Germain',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
  },
  // Agrega más equipos según sea necesario
];

export const mockMatches = [
  {
    date: '2023-10-01',
    homeTeam: 'Real Madrid',
    homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
    awayTeam: 'Manchester City',
    awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
    score: '2-1',
  },
  {
    date: '2023-10-02',
    homeTeam: 'Barcelona',
    homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
    awayTeam: 'Bayern Munich',
    awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg',
    score: '1-3',
  },
  {
    date: '2023-10-03',
    homeTeam: 'Liverpool',
    homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/sco/0/0c/Liverpool_FC.svg',
    awayTeam: 'Paris Saint-Germain',
    awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
    score: '0-0',
  },
  // Agrega más partidos según sea necesario
];

export const competitionHeader = {
  name: 'UEFA Champions League',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/UEFA_Champions_League_logo.svg',
  season: '2023-2024',
};

export const mockUpcomingMatches = [
  {
    date: '2023-11-01',
    time: '18:00',
    homeTeam: 'Real Madrid',
    homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
    awayTeam: 'Manchester City',
    awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
  },
  {
    date: '2023-11-02',
    time: '20:00',
    homeTeam: 'Barcelona',
    homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
    awayTeam: 'Bayern Munich',
    awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg',
  },
  {
    date: '2023-11-03',
    time: '21:00',
    homeTeam: 'Liverpool',
    homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/sco/0/0c/Liverpool_FC.svg',
    awayTeam: 'Paris Saint-Germain',
    awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
  },
  // Agrega más partidos futuros según sea necesario
];

export const mockStandings = [
  {
    position: 1,
    team: 'Real Madrid',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
    played: 10,
    won: 8,
    drawn: 1,
    lost: 1,
    points: 25,
    lastMatches: ['W', 'W', 'W', 'W', 'L']
  },
  {
    position: 2,
    team: 'Manchester City',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
    played: 10,
    won: 7,
    drawn: 2,
    lost: 1,
    points: 23,
    lastMatches: ['W', 'D', 'W', 'W', 'W']
  },
  {
    position: 3,
    team: 'Barcelona',
    logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
    played: 10,
    won: 6,
    drawn: 3,
    lost: 1,
    points: 21,
    lastMatches: ['W', 'D', 'L', 'W', 'D']
  },
  {
    position: 4,
    team: 'Bayern Munich',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg',
    played: 10,
    won: 6,
    drawn: 2,
    lost: 2,
    points: 20,
    lastMatches: ['L', 'W', 'W', 'D', 'W']
  },
  {
    position: 5,
    team: 'Liverpool',
    logo: 'https://upload.wikimedia.org/wikipedia/sco/0/0c/Liverpool_FC.svg',
    played: 10,
    won: 5,
    drawn: 3,
    lost: 2,
    points: 18,
    lastMatches: ['D', 'W', 'L', 'W', 'D']
  },
  {
    position: 6,
    team: 'Paris Saint-Germain',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
    played: 10,
    won: 4,
    drawn: 4,
    lost: 2,
    points: 16,
    lastMatches: ['D', 'L', 'W', 'D', 'W']
  },
  // Agrega más posiciones según sea necesario
];

export const mockPlayerStats = [
  {
    name: 'Karim Benzema',
    team: 'Real Madrid',
    teamLogo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
    goals: 10,
    assists: 5,
    yellowCards: 2,
    redCards: 0,
  },
  {
    name: 'Kevin De Bruyne',
    team: 'Manchester City',
    teamLogo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
    goals: 8,
    assists: 10,
    yellowCards: 1,
    redCards: 0,
  },
  {
    name: 'Lionel Messi',
    team: 'Paris Saint-Germain',
    teamLogo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
    goals: 12,
    assists: 7,
    yellowCards: 3,
    redCards: 1,
  },
  {
    name: 'Robert Lewandowski',
    team: 'Barcelona',
    teamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
    goals: 9,
    assists: 4,
    yellowCards: 1,
    redCards: 0,
  },
  {
    name: 'Mohamed Salah',
    team: 'Liverpool',
    teamLogo: 'https://upload.wikimedia.org/wikipedia/sco/0/0c/Liverpool_FC.svg',
    goals: 11,
    assists: 6,
    yellowCards: 2,
    redCards: 0,
  },
  // Agrega más jugadores según sea necesario
];


export const mockTeamStats = [
  {
    team: 'Real Madrid',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
    played: 10,
    won: 8,
    drawn: 1,
    lost: 1,
    goalsFor: 25,
    goalsAgainst: 10,
    goalDifference: 15,
    points: 25,
    possession: '60%',
    shotsOnTarget: 80,
    passesCompleted: 5000,
    yellowCards: 10,
    redCards: 1,
    lastMatches: ['W', 'W', 'W', 'W', 'L']
  },
  {
    team: 'Manchester City',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
    played: 10,
    won: 7,
    drawn: 2,
    lost: 1,
    goalsFor: 22,
    goalsAgainst: 8,
    goalDifference: 14,
    points: 23,
    possession: '65%',
    shotsOnTarget: 75,
    passesCompleted: 5200,
    yellowCards: 8,
    redCards: 0,
    lastMatches: ['W', 'D', 'W', 'W', 'W']
  },
  {
    team: 'Barcelona',
    logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
    played: 10,
    won: 6,
    drawn: 3,
    lost: 1,
    goalsFor: 20,
    goalsAgainst: 12,
    goalDifference: 8,
    points: 21,
    possession: '58%',
    shotsOnTarget: 70,
    passesCompleted: 4900,
    yellowCards: 12,
    redCards: 2,
    lastMatches: ['W', 'D', 'L', 'W', 'D']
  },
  {
    team: 'Bayern Munich',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Logo_FC_Bayern_M%C3%BCnchen_%282002%E2%80%932017%29.svg',
    played: 10,
    won: 6,
    drawn: 2,
    lost: 2,
    goalsFor: 24,
    goalsAgainst: 14,
    goalDifference: 10,
    points: 20,
    possession: '62%',
    shotsOnTarget: 78,
    passesCompleted: 5100,
    yellowCards: 9,
    redCards: 1,
    lastMatches: ['L', 'W', 'W', 'D', 'W']
  },
  {
    team: 'Liverpool',
    logo: 'https://upload.wikimedia.org/wikipedia/sco/0/0c/Liverpool_FC.svg',
    played: 10,
    won: 5,
    drawn: 3,
    lost: 2,
    goalsFor: 18,
    goalsAgainst: 12,
    goalDifference: 6,
    points: 18,
    possession: '55%',
    shotsOnTarget: 65,
    passesCompleted: 4800,
    yellowCards: 11,
    redCards: 1,
    lastMatches: ['D', 'W', 'L', 'W', 'D']
  },
  {
    team: 'Paris Saint-Germain',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
    played: 10,
    won: 4,
    drawn: 4,
    lost: 2,
    goalsFor: 16,
    goalsAgainst: 10,
    goalDifference: 6,
    points: 16,
    possession: '63%',
    shotsOnTarget: 68,
    passesCompleted: 4950,
    yellowCards: 10,
    redCards: 2,
    lastMatches: ['D', 'L', 'W', 'D', 'W']
  },
  // Agrega más estadísticas de equipos según sea necesario
];