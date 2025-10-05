import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackModel } from '@app/core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.html',
  styleUrl: './media-player.css'
})
export class MediaPlayer implements OnInit {

  mockCover: TrackModel = {
    cover: 'https://lastfm.freetls.fastly.net/i/u/300x300/1a1cc9431ffacc1b7be877d61975dfc8.jpg',
    album: 'Gioly & Assia',
    name: 'BEBE (Oficial)',
    url: 'http://localhost/track.mp3',
    _id: 1
}

  constructor() { }
  
  ngOnInit(): void {
  }
}
