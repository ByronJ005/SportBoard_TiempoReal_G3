import { RuleCompetition } from './rule-competence.model';
import { RuleDiscipline } from './rule-discipline.model';
import { Format } from './format.model';

export interface Competence {
    name: string;
    description: string;
    logo: string;
    competence_format?: Format;
    rule_discipline_list?: RuleDiscipline[];
    rule_list?: RuleCompetition[];
}
