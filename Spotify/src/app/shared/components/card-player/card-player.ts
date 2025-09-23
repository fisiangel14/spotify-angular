import { Component,Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-card-player',
  imports: [],
  templateUrl: './card-player.html',
  styleUrl: './card-player.css'
})
export class CardPlayer {
  @Input() data: any;
  @Input() track!: TrackModel; // 👈 este es el que recibes desde SectionGeneric
  @Input() mode: 'small' | 'big' = 'small';
}
