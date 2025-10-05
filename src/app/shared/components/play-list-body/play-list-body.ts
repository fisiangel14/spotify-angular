import { TrackModel } from '@app/core/models/tracks.model';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as dataRaw from '../../../data/tracks.json';

@Component({
  selector: 'app-play-list-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './play-list-body.html',
  styleUrl: './play-list-body.css'
})
export class PlayListBody implements OnInit {
  tracks: TrackModel[] = [];

  constructor() {}

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default;
    this.tracks = data;
  }

}
