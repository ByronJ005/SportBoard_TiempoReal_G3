import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Coach } from '../../models/real-time/coach.model';

@Injectable({
    providedIn: 'root'
})
export class CoachService {
    private apiUrl = environment.services.realTime.endpoints.coaches;

    constructor(private http: HttpClient) {}

    getCoaches(): Observable<Coach[]> {
        return this.http.get<Coach[]>(this.apiUrl);
    }

    getCoach(id: number): Observable<Coach> {
        return this.http.get<Coach>(`${this.apiUrl}/${id}`);
    }

    createCoach(coach: Coach): Observable<Coach> {
        return this.http.post<Coach>(this.apiUrl, coach);
    }

    updateCoach(id: number, coach: Coach): Observable<Coach> {
        return this.http.put<Coach>(`${this.apiUrl}/${id}`, coach);
    }

    deleteCoach(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
