import { CompetitionEdition } from './competence-edition.model';
import { Stage } from './stage.model';

export interface StageCompetition {
    competition: CompetitionEdition;
    stage: Stage;
}