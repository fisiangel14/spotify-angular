import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionGeneric } from '@shared/components/section-generic/section-generic';
import * as dataRaw from '../../data/tracks.json'

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [CommonModule, SectionGeneric],
  templateUrl: './tracks.html',
  styleUrl: './tracks.css'
})
export class Tracks implements OnInit {

  mockTracksList = []

  ngOnInit(): void {
      const {data}: any = (dataRaw as any).default;
      this.mockTracksList = data;
  }
}
