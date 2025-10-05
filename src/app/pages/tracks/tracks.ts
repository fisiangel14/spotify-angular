import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionGeneric } from '@shared/components/section-generic/section-generic';


@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [CommonModule, SectionGeneric],
  templateUrl: './tracks.html',
  styleUrl: './tracks.css'
})
export class Tracks {
mockTracksList = [
{
    name: 'BEBE (Oficial)'
    },
    {
name: 'BEBE (Oficial)'
    },
    {
      name: 'BEBE (Oficial)'
    }
  ]
}
