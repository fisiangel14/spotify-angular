import { Component } from '@angular/core';
import { SectionGeneric } from '@shared/components/section-generic/section-generic';  
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../app/data/tracks.json';
@Component({
  selector: 'app-tracks-page',
  imports: [SectionGeneric],
  templateUrl: './tracks-page.html',
  styleUrl: './tracks-page.css'
})
export class TracksPage {
mockTracksList: TrackModel[]  = [ 
];
ngOnInit(): void {
    const { data }: any = (dataRaw as any).default;
    this.mockTracksList = data;
  }
}
