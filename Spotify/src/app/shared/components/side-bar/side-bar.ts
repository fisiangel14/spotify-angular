import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  imports: [CommonModule],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css'
})
export class SideBar {
mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] };

  customOptions: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' }
      }
    ];

    this.mainMenu.accessLink = [
      { name: 'Crear lista', icon: 'uil-plus-square' },
      { name: 'Canciones que te gustan', icon: 'uil-heart-medical' }
    ];

    this.customOptions = [
      { name: 'Mi lista º1', router: ['/'] },
      { name: 'Mi lista º2', router: ['/'] },
      { name: 'Mi lista º3', router: ['/'] },
      { name: 'Mi lista º4', router: ['/'] }
    ];
  }
}

