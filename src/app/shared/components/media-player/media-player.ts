import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackModel } from '@app/core/models/tracks.model';
import { Multimedia } from '@app/shared/services/multimedia';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.html',
  styleUrl: './media-player.css'
})
export class MediaPlayer implements OnInit, OnDestroy {

  mockCover: TrackModel = {
      cover: 'https://lastfm.freetls.fastly.net/i/u/300x300/1a1cc9431ffacc1b7be877d61975dfc8.jpg',
      album: 'Gioly & Assia',
      name: 'BEBE (Oficial)',
      url: 'http://localhost/track.mp3',
      _id: 1
  }

  listObserver$: Array<Subscription> = [];

  constructor(private multimedia: Multimedia) { }

  
  
  ngOnInit(): void {
    const observer1$: Subscription = this.multimedia.callback.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo canción en el reproductor', response);
      }
    );
    this.listObserver$ = [observer1$];
  }

  ngOnDestroy(): void {
    this.listObserver$.forEach(u => u.unsubscribe());
  }
}
