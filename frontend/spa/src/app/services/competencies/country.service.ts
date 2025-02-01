import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Country } from "../../models/competencies/country.model";

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    private apiUrl = environment.services.competencies.endpoints.countries;
    
    constructor(private http: HttpClient) { }
    
    getCountries(): Observable<Country[]> {
        return this.http.get<Country[]>(this.apiUrl);
    }

    getCountry(id: number): Observable<Country> {
        return this.http.get<Country>(`${this.apiUrl}/${id}`);
    }

    createCountry(country: Country): Observable<Country> {
        return this.http.post<Country>(this.apiUrl, country);
    }

    updateCountry(id: number, country: Country): Observable<Country> {
        return this.http.put<Country>(`${this.apiUrl}/${id}`, country);
    }

    deleteCountry(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}