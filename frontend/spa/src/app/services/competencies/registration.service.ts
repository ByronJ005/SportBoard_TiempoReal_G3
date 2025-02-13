import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Registration } from '../../models/competencies/registration.model';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {
    private apiUrl = environment.services.competencies.endpoints.registrations;

    constructor(private http: HttpClient) {}

    getRegistrations(): Observable<Registration[]> {
        return this.http.get<Registration[]>(this.apiUrl);
    }

    getRegistration(id: number): Observable<Registration> {
        return this.http.get<Registration>(`${this.apiUrl}/${id}`);
    }

    createRegistration(registration: Registration): Observable<Registration> {
        return this.http.post<Registration>(this.apiUrl, registration);
    }

    updateRegistration(id: number, registration: Registration): Observable<Registration> {
        return this.http.put<Registration>(`${this.apiUrl}/${id}`, registration);
    }

    deleteRegistration(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
