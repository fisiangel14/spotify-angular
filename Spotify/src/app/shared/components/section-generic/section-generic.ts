import { Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { TrackModel } from '@core/models/tracks.model'; 
import { CardPlayer } from '../card-player/card-player';

@Component({
  selector: 'app-section-generic',
  imports: [CommonModule, NgClass, CardPlayer],
  templateUrl: './section-generic.html',
  styleUrl: './section-generic.css'
})
export class SectionGeneric {
  @Input() title: string = '';
  @Input() mode: 'small' | 'big' = 'big';
  @Input() dataTracks: TrackModel[] = [];
}
