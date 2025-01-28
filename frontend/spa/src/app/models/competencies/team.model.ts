import { Squad } from './squad.model';
import { Country } from './country.model';

export interface Team {
    name: string;
    country: Country;
    logo: string;
    squads: Squad[];
}