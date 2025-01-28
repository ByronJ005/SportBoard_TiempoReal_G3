import { User } from './user.model';
import { Planning } from './planning.model';
import { Registration } from './registration.model';
import { Team } from './team.model';

export interface Squad {
    season: Planning;
    team: Team;
    players: User[];
    coaches: User[];
    registrations: Registration[];
}