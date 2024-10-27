import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomePageComponent } from "../HomePage/home-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, HomePageComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone:true
})
export class AppComponent {
  title = 'kino';
}
