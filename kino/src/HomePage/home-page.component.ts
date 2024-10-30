import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MovieService } from '../entities/movie/api/get-by-filters';
import { selectMovies, selectMoviesData, selectFilter } from '../store/home-page.selectors';
import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client';
import { addMovies, setFilter, setMovies, setMoviesData } from '../store/home-page.action'
import { RootState } from '../store';
import { AsyncPipe, NgFor } from '@angular/common';
import { FilmPreviewCardComponent } from "../app/Components/FilmPreviewCard/FilmPreviewCard";
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    imports: [NgFor, AsyncPipe, FilmPreviewCardComponent, MatGridListModule],
    standalone:true
})

export class HomePageComponent implements OnInit {
    movies$: Observable<MovieDtoV13[]>;
    moviesData$: Observable<{ totalCount: number; pages: number } | null>;
    filter$: Observable<any>;

    constructor(private store: Store<RootState>, private movieService: MovieService) {
        this.movies$ = this.store.select(selectMovies);
        this.moviesData$ = this.store.select(selectMoviesData);
        this.filter$ = this.store.select(selectFilter);
    }

    ngOnInit() {
        this.filter$.subscribe(filter => {
            this.getMoviesByFilterHandler(filter);
        });
    }

    private getMoviesByFilterHandler(filter: any) {
        this.movieService.getMoviesByFilter(filter).subscribe(response => {
            if (response.data) {
                const newMoviesData = {
                    totalCount: response.data.total,
                    pages: response.data.pages,
                };

                this.store.dispatch(setMoviesData(newMoviesData));

                if (newMoviesData.pages === 1) {
                    this.store.dispatch(setMovies({ movies: response.data.docs }));
                } else {
                    this.store.dispatch(addMovies({ movies: response.data.docs }));
                }
            }
        }, (error) => {
            console.error('Error fetching movies', error);
        });
    }

    handleShowMore() {
        this.filter$.subscribe(filter => {
            const newFilter = {
                 ...filter,
                page: Number(filter) + 1,
            };
            this.store.dispatch(setFilter(newFilter));
        });
    }
}