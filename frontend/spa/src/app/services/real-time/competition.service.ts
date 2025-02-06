import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Competition } from '../../models/real-time/competition.model';

@Injectable({
    providedIn: 'root'
})
export class CompetitionService {
    private apiUrl = environment.services.realTime.endpoints.competitions;

    constructor(private http: HttpClient) {}

    getCompetitions(): Observable<Competition[]> {
        return this.http.get<Competition[]>(this.apiUrl);
    }

    getCompetition(id: number): Observable<Competition> {
        return this.http.get<Competition>(`${this.apiUrl}/${id}`);
    }

    createCompetition(competition: Competition): Observable<Competition> {
        return this.http.post<Competition>(this.apiUrl, competition);
    }

    updateCompetition(id: number, competition: Competition): Observable<Competition> {
        return this.http.put<Competition>(`${this.apiUrl}/${id}`, competition);
    }

    deleteCompetition(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
