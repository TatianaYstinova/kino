import { Component, Input } from "@angular/core";
import { USER_ID_KEY } from "../../../entities/user";
import { jwtDecode } from "jwt-decode";

@Component({
    selector: 'app-movie-rating-editor',
    templateUrl: './MovieRatingEditor.html',
    styleUrls: ['./MovieRatingEditor.scss'],
    standalone: true,
    imports: []
})
export class MovieRatingEditor {
    @Input() movieId: number | undefined;

    ngOnInit(){
        const token = localStorage.getItem("accessToken");
        if(token){
            const decoded = jwtDecode<any>(token);
    
        }

    }
}



