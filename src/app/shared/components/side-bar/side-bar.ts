import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css'
})
export class SideBar implements OnInit {

  mainMenu: {
    defaultOptions: Array<any>;
    accessLink: Array<any>;
  } = { defaultOptions: [], accessLink: [] };

  customOptions: Array<any> = [];

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      { name: 'Home', icon: 'uil uil-estate', router: ['/'] },
      { name: 'Buscar', icon: 'uil uil-search', router: ['/tracks'] },
      { name: 'Tu biblioteca', icon: 'uil uil-chart', router: ['/favorites'] }
    ];

    this.mainMenu.accessLink = [
      { name: 'Crear lista', icon: 'uil uil-plus-square' },
      { name: 'Canciones que te gustan', icon: 'uil uil-heart-medical' }
    ];

    this.customOptions = [
      { name: 'Mi Playlist ✨', router: ['/history'] },
      { name: 'Top Perú 🇵🇪', router: ['/history'] }
    ];
  }

}
