import { Component, Input } from "@angular/core";
import { USER_ID_KEY } from "../../../entities/user";


import { PopoverModule } from 'ngx-bootstrap/popover';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { RatingModule } from 'ngx-bootstrap/rating';
import { TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { FormBuilder } from "@angular/forms";
import { jwtDecode } from 'jwt-decode';
import {  GetFilmScoresService } from "../../../entities/estimates/api/get";


@Component({
  selector: 'app-movie-rating-editor',
  templateUrl: './MovieRatingEditor.html',
  styleUrls: ['./MovieRatingEditor.scss'],
  standalone: true,
  imports: [PopoverModule, ButtonsModule, RatingModule]
})
export class MovieRatingEditor {
  [x: string]: any;
  @Input() movieId: number | undefined;
  ratingValue: number | null = null;
  userId: string = '';
  modalOpen = false;
  maxValue :number = 10;

  constructor(
    // private userService: UserService,
    private filmScoreService: GetFilmScoresService,
    // private modalService: NgbModal,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const decoded: any = jwtDecode(token);
      this.userId = decoded['USER_ID_KEY'];
    }

    this.fetchFilmScores();
  }

  fetchFilmScores() {
    this.filmScoreService.getFilmScores(this.userId).subscribe(scores => {
      const existingScore = scores.find(
        score => score.movieId === this.movieId && score.userId === this.userId
      );
      this.ratingValue = existingScore ? existingScore.grade : null;
    });
  }

  // handleClick(event: MouseEvent) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   const isAuthorized = this.userService.isAuthorized(); // проверка авторизации
  //   if (!isAuthorized) {
  //     this.modalService.open(this.modalContent);
  //   } else {
  //     this.togglePopover(); // метод для показа или скрытия поповера
  //   }
  // }

  getCircleColor() {
    if (this.ratingValue !== null) {
      if (this.ratingValue >= 1 && this.ratingValue <= 4) return 'low-rating';
      if (this.ratingValue >= 5 && this.ratingValue <= 8) return 'medium-rating';
      if (this.ratingValue >= 9 && this.ratingValue <= 10) return 'high-rating';
    }
    return 'transparent';
  }

  // handleRatingChange(value: number | null) {
  //   const existingScore = this.scores?.find(score => score.movieId === this.movieId);

  //   if (existingScore) {
  //     if (value === null) {
  //       this.filmScoreService.deleteFilmScore(existingScore.id).subscribe(() => this.fetchFilmScores());
  //     } else {
  //       this.filmScoreService.updateFilmScore({ ...existingScore, grade: value }).subscribe(() => this.fetchFilmScores());
  //     }
  //   } else {
  //     this.filmScoreService.addFilmScore({ userId: this.userId, movieId: this.movieId, grade: value }).subscribe(() => this.fetchFilmScores());
  //   }
  // }
}








