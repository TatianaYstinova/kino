import { Component, OnInit } from "@angular/core";
import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import { Observable } from "rxjs";
import { RootState } from "../store";
import { Store } from "@ngrx/store";

@Component({
    selector: 'app-film-page',
    templateUrl: './FilmPageComponent.html',
    styleUrls: ['./FilmPageComponent.scss'],
    imports: [],
    standalone:true
})

export class FilmPageComponent implements OnInit  {

    movie$: Observable<MovieDtoV13[]> | undefined;
    favorites$: Observable<any[]> | undefined;
    userId: string | null = null;
    alertMessage: string | null = null;
  
    constructor(
      private store: Store<RootState>
      private filmService: FilmService,
      private favoritesService: FavoritesService,
    ) {}

    ngOnInit(): void {
        this.route.params.pipe(
          map(params => params['id']),
          switchMap(id => {
            return this.filmService.getMovieById(id).pipe(
              tap(movie => {
                this.store.dispatch(FilmPageActions.setMovie({ movie }));
              })
            );
          })
        ).subscribe();
    
        this.loadFavorites();
      }
    
      loadFavorites() {
        const token = localStorage.getItem("accessToken");
        if (token) {
          const decoded = jwtDecode<any>(token);
          this.userId = decoded['USER_ID_KEY'];
          this.favorites$ = this.favoritesService.getFavorites(this.userId).pipe(
            tap(favorites => {
              this.store.dispatch(FilmPageActions.setFavorites({ favorites }));
            })
          );
        }
      }
    
      toggleFavorite(movieId: number) {
        if (!this.userId) {
          this.alertMessage = "Добавить фильм в 'Избранное' может только авторизованный пользователь. Авторизуйтесь пожалуйста.";
          return;
        }
    
        this.favorites$.pipe(
          map(favorites => favorites.some(fav => fav.favoritedMovieId === movieId)),
          switchMap(isInFavorites => {
            if (isInFavorites) {
              return this.favoritesService.deleteFromFavorites(movieId);
            } else {
              return this.favoritesService.addToFavorites({ userId: this.userId, favoritedMovieId: movieId });
            }
          })
        ).subscribe(() => {
          this.loadFavorites();
          this.openModal(); // Открытие модального окна
        });
      }
    
      openModal() {
        const modalRef = this.modalService.open(YourModalComponent); // Ваш компонент модального окна
        modalRef.componentInstance.alertMessage = this.alertMessage;
      }
}