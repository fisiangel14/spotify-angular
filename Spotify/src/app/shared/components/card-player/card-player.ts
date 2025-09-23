import { Component,Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-player',
  imports: [CommonModule],
  templateUrl: './card-player.html',
  styleUrl: './card-player.css'
})
export class CardPlayer {
  @Input() data: any;
  @Input() track: TrackModel = {_id: 0,
    name: '',
    album: '',
    url: '',
    cover: ''}; // 👈 este es el que recibes desde SectionGeneric
  @Input() mode: 'small' | 'big' = 'small';
}
