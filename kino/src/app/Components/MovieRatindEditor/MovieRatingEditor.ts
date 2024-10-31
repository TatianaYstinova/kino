import { Component, inject, Input } from "@angular/core";
import { USER_ID_KEY } from "../../../entities/user";

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {
    MatBottomSheet,
    MatBottomSheetModule,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { PopoverModule } from 'ngx-bootstrap/popover';

@Component({
    selector: 'app-movie-rating-editor',
    templateUrl: './MovieRatingEditor.html',
    styleUrls: ['./MovieRatingEditor.scss'],
    standalone: true,
    imports: [MatButtonModule, MatBottomSheetModule,PopoverModule]
})
export class MovieRatingEditor {
    @Input() movieId: number | undefined;
    
}






