import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CompetitionEdition } from '../../models/competencies/competence-edition.model';

@Injectable({
    providedIn: 'root'
})
export class CompetenceEditionService {
    private apiUrl = environment.services.competencies.endpoints.competenceEditions;

    constructor(private http: HttpClient) {}

    getCompetenceEditions(): Observable<CompetitionEdition[]> {
        return this.http.get<CompetitionEdition[]>(this.apiUrl);
    }

    getCompetenceEdition(id: number): Observable<CompetitionEdition> {
        return this.http.get<CompetitionEdition>(`${this.apiUrl}/${id}`);
    }

    createCompetenceEdition(competenceEdition: CompetitionEdition): Observable<CompetitionEdition> {
        return this.http.post<CompetitionEdition>(this.apiUrl, competenceEdition);
    }

    updateCompetenceEdition(id: number, competenceEdition: CompetitionEdition): Observable<CompetitionEdition> {
        return this.http.put<CompetitionEdition>(`${this.apiUrl}/${id}`, competenceEdition);
    }

    deleteCompetenceEdition(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
