import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filter, IQueryFields, IResponse, MovieDocsResponseDtoV13 } from '@openmoviedb/kinopoiskdev_client';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MovieService {
    private apiUrl = 'http://localhost:777/movies';

    constructor(private http: HttpClient) { }

    getMoviesByFilter(filters: Filter<IQueryFields>): Observable<IResponse<MovieDocsResponseDtoV13>> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });

        return this.http.post<IResponse<MovieDocsResponseDtoV13>>(this.apiUrl, filters, { headers })
            .pipe(
                catchError(err => {
                    console.error('Network response was not ok', err);
                    return throwError('Network response was not ok'); // Или обрабатываю ошибку по-другому
                })
            );
    }
}

