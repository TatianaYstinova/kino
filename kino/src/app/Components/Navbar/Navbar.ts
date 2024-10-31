import { NgOptimizedImage } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector: 'nav',
    templateUrl: './Navbar.html',
    styleUrls: ['./Navbar.scss'],
    imports: [NgOptimizedImage,RouterOutlet, RouterLink],
    standalone:true
})

export class NavbarComponent  {
   
}