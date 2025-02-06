import { EventType } from './event-type.model';
import { Player } from './player.model';
import { Team } from './team.model';

export interface Event {
    id: number;
    matchId: number;
    teamId?: number;
    playerId?: number;
    relatedPlayerId?: number;
    eventType: EventType | string;
    minute: number;
    // Relaciones (opcional, si vienen en la respuesta)
    team?: Team;
    player?: Player;
    relatedPlayer?: Player;
  }