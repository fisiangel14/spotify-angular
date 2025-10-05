import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
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
      { name: 'Home', icon: 'uil uil-estate', router: ['/', 'auth'] },
      { name: 'Buscar', icon: 'uil uil-search', router: ['/', 'history'] },
      { name: 'Tu biblioteca', icon: 'uil uil-chart', router: ['/','favorites'], query:{ hola: 'mundo'} }
    ];

    this.mainMenu.accessLink = [
      { name: 'Crear lista', icon: 'uil uil-plus-square' },
      { name: 'Canciones que te gustan', icon: 'uil uil-heart-medical' }
    ];

    this.customOptions = [
      { name: 'Mi lista °1', router: ['/'] },
      { name: 'Mi lista °2', router: ['/'] },
      { name: 'Mi lista °3', router: ['/'] },
      { name: 'Mi lista °4', router: ['/']}
    ];

  }
}