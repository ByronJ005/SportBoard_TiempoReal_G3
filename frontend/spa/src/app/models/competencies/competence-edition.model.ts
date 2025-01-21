import { Competence } from './competence.model';
import { Planning } from './planning.model';
import { Registration } from './registration.model';
import { RuleCompetition } from './rule-competence.model';
import { RuleDiscipline } from './rule-discipline.model';
import { Stage } from './stage.model';
import { User } from './user.model';

export interface CompetitionEdition {
    id: number;
    competence_admin: User;
    planning: Planning;
    inscription_list: Registration[];
    subdivision_list: CompetitionEdition[];
    stage: Stage;
    rule_list: RuleCompetition[];
    rule_discipline_list: RuleDiscipline[];
    competence: Competence;
}