export enum EventType {
    // Eventos de jugadores
    GOAL = "Gol", // Al generar un gol, se debe controlar quien dió la asistencia
    FOUL = "Falta",
    YELLOW_CARD = "Tarjeta Amarilla",
    RED_CARD = "Tarjeta Roja",
    SUBSTITUTION = "Sustitución",
    // Eventos de equipos,
    SHOT = "Tiro",
    SHOT_TO_GOAL = "Tiro a gol",
    PASS = "Pase",
    CORNER = "Corner",
    OFFSIDE = "Offside"
}