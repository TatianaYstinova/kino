import { createAction, props } from "@ngrx/store";
import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";

export const setMoviesData = createAction(
    '[HomePage] Set Movies Data',
    props<{ totalCount: number; pages: number }>()
  );
  
  export const setMovies = createAction(
    '[HomePage] Set Movies',
    props<{ movies: MovieDtoV13[] }>()
  );
  
  export const addMovies = createAction(
    '[HomePage] Add Movies',
    props<{ movies: MovieDtoV13[] }>()
  );
  
  export const setFilter = createAction(
    '[HomePage] Set Filter',
    props<{ filter: any }>()
  );