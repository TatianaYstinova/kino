import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { FilmScore } from "../types";

@Injectable({
    providedIn: 'root',
})
export class GetFilmScoresService {
    constructor(private http: HttpClient) { };

    private getApiUrl(userId: string) {
        return `http://localhost:777/filmScores?userId=${userId}`;
    };

    getFilmScores(userId: string): Observable<FilmScore[]> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });

        return this.http.get<FilmScore[]>(this.getApiUrl(userId), {
            headers
        }).pipe(
            catchError(err => {
                console.error('Network response was not ok', err);
                return throwError('Network response was not ok'); // Или обрабатываю ошибку по-другому
            })
        )

    }
}