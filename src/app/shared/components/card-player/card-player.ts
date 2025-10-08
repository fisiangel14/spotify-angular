import { Component, Input,OnInit } from '@angular/core';
import { TrackModel } from '@app/core/models/tracks.model';
import { CommonModule } from '@angular/common';
import { ImgBroken } from "@app/shared/directives/img-broken";
import { Multimedia } from '@app/shared/services/multimedia';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [CommonModule, ImgBroken],
  templateUrl: './card-player.html',
  styleUrl: './card-player.css'
})
export class CardPlayer implements OnInit {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TrackModel = {_id: 0, name: '', album: '', cover: '', url: ''};

  constructor(private multimediaService: Multimedia) { }

  ngOnInit(): void {
      
  }

  sendPlay(track: TrackModel): void{
    console.log('Enviando  canción al media-player', track);
    this.multimediaService.callback.emit(track);
  }
}
