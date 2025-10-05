import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPlayer } from '@shared/components/card-player/card-player';
import { TrackModel } from '@app/core/models/tracks.model';

@Component({
  selector: 'app-section-generic',
  standalone: true,
  imports: [CommonModule, CardPlayer],
  templateUrl: './section-generic.html',
  styleUrl: './section-generic.css'
})
export class SectionGeneric implements OnInit {
  @Input() title: string = '';
  @Input() mode: 'small' | 'big' = 'small';
  @Input() dataTracks: Array<TrackModel> = [];

  constructor() { }

  ngOnInit(): void {
  }
}
