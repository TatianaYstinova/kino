import { Component, inject, Input } from "@angular/core";
import { USER_ID_KEY } from "../../../entities/user";

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {
    MatBottomSheet,
    MatBottomSheetModule,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@Component({
    selector: 'app-movie-rating-editor',
    templateUrl: './MovieRatingEditor.html',
    styleUrls: ['./MovieRatingEditor.scss'],
    standalone: true,
    imports: [MatButtonModule, MatBottomSheetModule]
})
export class MovieRatingEditor {
    @Input() movieId: number | undefined;
    private _bottomSheet = inject(MatBottomSheet);

    openBottomSheet(): void {
        this._bottomSheet.open(MovieRatingEditor);
    }
}






