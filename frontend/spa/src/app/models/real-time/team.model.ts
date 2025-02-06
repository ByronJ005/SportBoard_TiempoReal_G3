import { Player } from './player.model';

export interface Team {
    id: number;
    name: string;
    city: string;
    photo?: string;
    // Relaciones: en el backend puedes tener relaciones para players y otros, 
    // en el frontend normalmente se reciben en endpoints separados
    players?: Player[];
    // Si necesitas tener el historial:
    //historicalPlayers?: Player[];
  }