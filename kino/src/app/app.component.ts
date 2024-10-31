import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomePageComponent } from "../HomePage/home-page.component";
import { NavbarComponent } from "./Components/Navbar/Navbar";
import { Router } from "express";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, RouterModule,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone:true
})
export class AppComponent {
  title = 'kino';
  isLoginPage :boolean = false;
}
