import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayListHeader } from '@shared/components/play-list-header/play-list-header';
import { PlayListBody } from '@shared/components/play-list-body/play-list-body';

@Component({
  selector: 'app-favorite-page',
  imports: [PlayListBody, PlayListHeader, CommonModule],
  templateUrl: './favorite-page.html',
  styleUrl: './favorite-page.css'
})
export class FavoritePage {

}
