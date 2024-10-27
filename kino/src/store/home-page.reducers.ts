import { createReducer, on } from '@ngrx/store';
import { setMoviesData, setMovies, addMovies, setFilter } from './home-page.action';
import { MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client';

export interface HomePageState {
    moviesData: { totalCount: number; pages: number } | null;
    movies: MovieDtoV13[];
    filter: any;
}

export const initialStateHomePage: HomePageState = {
    moviesData: null,
    movies: [],
    filter: { page: 1 },
};

export const homePageReducer = createReducer(
    initialStateHomePage,
    on(setMoviesData, (state, { totalCount, pages }) => ({ ...state, moviesData: { totalCount, pages } })),
    on(setMovies, (state, { movies }) => ({ ...state, movies })),
    on(addMovies, (state, { movies }) => ({ ...state, movies: [...state.movies, ...movies] })),
    on(setFilter, (state, { filter }) => ({ ...state, filter }))
);

export interface RootStateWithHomePageState {
    homePage: HomePageState;
}