import {  MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import { FavoriteMovie } from "../entities/favorite/type";
import { SimiralMovie } from "../entities/similarMovies/types";
import { createReducer, on } from "@ngrx/store";
import { setMovie,setFavorites,setSimilarMovies } from "./film-page.action";
import { state } from "@angular/animations";

export interface FilmPageState {
    movie: MovieDtoV13[];
    favorites: FavoriteMovie[] ;
    similarMovies: SimiralMovie[] 
}
const initialStateFilmPage: FilmPageState = {
    movie: [],
    favorites: [],
    similarMovies:[]
};

export const filmPageReducer = createReducer(
    initialStateFilmPage,
    on(setMovie, (state, { movie }) => ({
        ...state,...movie
    })),
    on(setFavorites, (state, { favoriteMovies }) => ({
        ...state,
        favorites: favoriteMovies
    })),
    on(setSimilarMovies, (state, { similarMovies }) => ({
        ...state,
        similarMovies: similarMovies
    }))
);
