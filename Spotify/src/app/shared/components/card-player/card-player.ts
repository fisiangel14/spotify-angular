import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card-player',
  imports: [],
  templateUrl: './card-player.html',
  styleUrl: './card-player.css'
})
export class CardPlayer {
  @Input() data: any;
}
