import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class ActorsService {
    private baseUrl = 'https://moviesdatabase.p.rapidapi.com/actors';
    private headers = new HttpHeaders({
        'X-RapidAPI-Key': 'e046670132mshc73474be1110b9dp11d445jsnd4ad31525242',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    })

    constructor(private httpClient: HttpClient) {}


    public getAll() {     
        return this.httpClient.get(this.baseUrl, { headers: this.headers })
        .pipe(
            map(response => {
                return response;
            }),
            catchError(async () => new Error('Błąd poczas pobierania aktorów!'))
        )
    }
}