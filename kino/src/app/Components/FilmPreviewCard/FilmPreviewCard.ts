import { Component, Input } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import { MovieRatingEditor } from "../MovieRatindEditor/MovieRatingEditor";

// export type FilmPreviewCardProps = {
//     name: string | undefined;
//     alternativeName: string;
//     grade: number;
//     img: string | undefined;
//     movieId: number;
//   };

  @Component({
    selector: 'app-film-preview-card',
    templateUrl:'./FilmPreviewCard.html',
    styleUrls:['./FilmPreviewCard.scss'],
    standalone:true,
    imports: [MatCardModule, MovieRatingEditor]
  })
  export class FilmPreviewCardComponent {
    @Input() name?: string;
    @Input() alternativeName: string | undefined ;
    @Input() grade: number | undefined;
    @Input() img?: string;
    @Input() movieId : number | undefined ;
  
     imageUrl(): string | undefined {
      return this.img ? this.img : this.alternativeName ;
    }
}