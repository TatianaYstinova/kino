import { Component, Input } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";

export type FilmPreviewCardProps = {
    name: string | undefined;
    alternativeName: string;
    grade: number;
    img: string | undefined;
    movieId: number;
  };

  @Component({
    selector: 'app-film-preview-card',
    templateUrl:'./FilmPreviewCard.html',
    styleUrls:['./FilmPreviewCard.scss'],
    standalone:true,
    imports:[MatCardModule]
  })
  export class FilmPreviewCardComponent {
    @Input() name?: string;
    @Input() alternativeName: string | undefined ;
    @Input() grade: number = 0;
    @Input() img?: string;
    @Input() movieId : number = 0 ;
  
     imageUrl(): string | undefined {
      return this.img ? this.img : this.alternativeName ;
    }
}