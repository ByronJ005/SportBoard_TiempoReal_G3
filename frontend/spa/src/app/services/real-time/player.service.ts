import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Player } from '../../models/real-time/player.model';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {
    private apiUrl = environment.services.realTime.endpoints.players;

    constructor(private http: HttpClient) {}

    getPlayers(): Observable<Player[]> {
        return this.http.get<Player[]>(this.apiUrl);
    }

    getPlayer(id: number): Observable<Player> {
        return this.http.get<Player>(`${this.apiUrl}/${id}`);
    }

    createPlayer(player: Player): Observable<Player> {
        return this.http.post<Player>(this.apiUrl, player);
    }

    updatePlayer(id: number, player: Player): Observable<Player> {
        return this.http.put<Player>(`${this.apiUrl}/${id}`, player);
    }

    deletePlayer(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
