import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Season } from '../../models/real-time/season.model';

@Injectable({
    providedIn: 'root'
})
export class SeasonService {
    private apiUrl = environment.services.realTime.endpoints.seasons;

    constructor(private http: HttpClient) {}

    getSeasons(): Observable<Season[]> {
        return this.http.get<Season[]>(this.apiUrl);
    }

    getSeason(id: number): Observable<Season> {
        return this.http.get<Season>(`${this.apiUrl}/${id}`);
    }

    createSeason(season: Season): Observable<Season> {
        return this.http.post<Season>(this.apiUrl, season);
    }

    updateSeason(id: number, season: Season): Observable<Season> {
        return this.http.put<Season>(`${this.apiUrl}/${id}`, season);
    }

    deleteSeason(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
