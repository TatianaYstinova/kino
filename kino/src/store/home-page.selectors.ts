import { createSelector } from "@ngrx/store";
import { HomePageState, RootStateWithHomePageState } from "./home-page.reducers";

export const selectHomePageState = (state: RootStateWithHomePageState) => state.homePage;

export const selectMoviesData = createSelector(
    selectHomePageState,
    (state: HomePageState) => state.moviesData
  );
  
  export const selectMovies = createSelector(
    selectHomePageState,
    (state: HomePageState) => state.movies
  );
  
  export const selectFilter = createSelector(
    selectHomePageState,
    (state: HomePageState) => state.filter
  );