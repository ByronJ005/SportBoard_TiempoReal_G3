
export interface User {
    username: string;
    email: string;
    role: 'Coach' | 'Player';
    created_at: Date;
}

export interface Team {
    name: string;
    country: Country;
    logo: string;
    squads: Squad[];
}

export interface Squad {
    season: Planning;
    team: Team;
    players: User[];
    coaches: User[];
    registrations: Registration[];
}

export interface PlayerAssignment {
    squad: Squad;
    player: User;
}

export interface CoachAssignment {
    squad: Squad;
    coach: User;
}

export interface Match {
    home_squad: Squad;
    away_squad: Squad;
    home_goals: number;
    away_goals: number;
    time: Date;
    stadium: Locality;
    stage: Stage;
}

export interface Locality {
    stadium_name: string;
    street_one: string;
    street_two: string;
    reference: string;
}

export interface Registration {
    squad: Squad;
    serie: string;
    competencie: CompetitionEdition;
}

export interface Planning {
    start_date: Date;
    end_date: Date;
}

export interface Rule {
    numeration: number;
    rule_description: string;
    actor: string;
    action: string;
    type_rule: string;
}

export interface Discipline {
    name: string;
    surface: string;
    federation: string;
    rule_list: RuleDiscipline[];
}

export interface RuleCompetition extends Rule {
    competence: Competence;
}

export interface RuleDiscipline extends Rule {
    discipline: Discipline;
}

export interface CompetitionEdition {
    competence_admin: User;
    planning: Planning;
    inscription_list: Registration[];
    subdivision_list: CompetitionEdition[];
    stage_list: Stage[];
    competence: Competence;
}

export interface Stage {
    time: Planning;
}

export interface StageCompetition {
    competition: CompetitionEdition;
    stage: Stage;
}

export interface Competence {
    name: string;
    description: string;
    logo: string;
    competence_format: Format;
    rule_discipline_list: RuleDiscipline[];
    rule_list: RuleCompetition[];
}

export interface Country {
    name: string;
    description: string;
}

export interface Format {
    name: string;
    description: string;
}
