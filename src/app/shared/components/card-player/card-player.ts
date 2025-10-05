import { Component, Input,OnInit } from '@angular/core';
import { TrackModel } from '@app/core/models/tracks.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-player.html',
  styleUrl: './card-player.css'
})
export class CardPlayer implements OnInit {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TrackModel = {_id: 0, name: '', album: '', cover: '', url: ''};

  constructor() { }

  ngOnInit(): void {
      
  }
}
