import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayListHeader } from "@app/shared/components/play-list-header/play-list-header";
import { PlayListBody } from "@app/shared/components/play-list-body/play-list-body";

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, PlayListHeader, PlayListBody],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css'
})
export class Favorites {

}
