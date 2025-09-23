import { Component } from '@angular/core';
import { SectionGeneric } from '@shared/components/section-generic/section-generic';
import { CardPlayer } from '@shared/components/card-player/card-player';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, SectionGeneric, CardPlayer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
   playlists = [
    { name: 'Top Hits', album: 'Mix 2025', cover: 'https://i.scdn.co/image/ab67616d0000b2739a9c51.jpg' },
    { name: 'Chill Vibes', album: 'Relax', cover: 'https://i.scdn.co/image/ab67616d0000b273af87d1.jpg' },
    { name: 'Workout', album: 'Energy', cover: 'https://i.scdn.co/image/ab67616d0000b27323d8c9.jpg' }
  ];
}
