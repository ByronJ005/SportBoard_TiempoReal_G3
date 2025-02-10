class ApiEndpoints {
  static const String protocol = 'http';
  static const String address = 'localhost';
  static const String port = '8000';
  static const String basePath = 'catalog';
  static const String realTimePath = 'real-time';

  static String get baseUrl => '$protocol://$address:$port/$basePath';
  static String get realTimeBaseUrl => '$protocol://$address:$port/$realTimePath';

  // Existing endpoints
  static String get groups => '$baseUrl/groups';
  static String get createEvent => '$realTimeBaseUrl/events';

  // Endpoints para obtener partidos
  static String get matches => '$realTimeBaseUrl/matches'; // Lista de partidos
  static String get matchesByDay => '$realTimeBaseUrl/matches/by-day'; // Partidos por día
  static String get matchesFilter => '$realTimeBaseUrl/matches/filter'; // Filtro de partidos

  // Estadísticas de partidos
  static String playerMatchStats(int matchId) => '$realTimeBaseUrl/matches/$matchId/player-stats';
  static String teamMatchStats(int matchId) => '$realTimeBaseUrl/matches/$matchId/team-stats';
  static String matchEvents(int matchId) => '$realTimeBaseUrl/matches/$matchId/events';

  // Estadísticas generales
  static String get playerSeasonStats => '$realTimeBaseUrl/player-statistics';
  static String get teamSeasonStats => '$realTimeBaseUrl/team-statistics';
  static String get teamClassification => '$realTimeBaseUrl/team-statistics/classification';
}
