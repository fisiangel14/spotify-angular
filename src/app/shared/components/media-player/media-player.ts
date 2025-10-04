import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.html',
  styleUrl: './media-player.css'
})
export class MediaPlayer implements OnInit {

  mockCover: any = {
    cover: 'https://lastfm.freetls.fastly.net/i/u/300x300/1a1cc9431ffacc1b7be877d61975dfc8.jpg',
    album: 'Gioly &amp; Assia',
    name: 'BEBE (Oficial)'
}

  constructor() { }
  
  ngOnInit(): void {
  }
}
