import { RuleDiscipline } from './rule-discipline.model';

export interface Discipline {
    name: string;
    surface: string;
    federation: string;
    rule_list: RuleDiscipline[];
}