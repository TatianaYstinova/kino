import { createAction, props } from '@ngrx/store';
import { IResponse, MovieDtoV13 } from '@openmoviedb/kinopoiskdev_client';
import { FavoriteMovie } from '../entities/favorite/type';
import { SimiralMovie } from '../entities/similarMovies/types';

export const setMovie = createAction(
    '[Film Page] Set Movie',
    props<{ movie: IResponse<MovieDtoV13> }>()
);

export const setFavorites = createAction(
    '[Film Page] Set Favorites',
    props<{ favoriteMovies: FavoriteMovie[] }>()
);

export const setSimilarMovies = createAction(
    '[Film Page] Set Similar Movies',
    props<{ similarMovies: SimiralMovie[] }>()
);
