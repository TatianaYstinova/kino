import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponse, MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MovieService {

    constructor(private http: HttpClient) { }

    getMovieById(id: number): Observable<IResponse<MovieDtoV13>> {
        const apiUrl = `http://localhost:777/movies?id=${id}`;

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });

        return this.http.get<IResponse<MovieDtoV13>>(apiUrl, {
            headers
        }).pipe(
            catchError(err => {
                console.error('Network response was not ok', err);
                return throwError('Network response was not ok'); // Или обрабатываю ошибку по-другому
            })
        )

    }
}
