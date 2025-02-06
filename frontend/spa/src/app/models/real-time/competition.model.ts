import { Season } from './season.model';
import { CompetitionType } from './competition-type.model';

export interface Competition {
    id: number;
    name: string;
    type: CompetitionType | string;
    teamLimit: number;
    seasons?: Season[];

    // Se agrega el campo para identificar temporada actual
    currentSeasonId: number;
    currentSeason?: Season;
  }