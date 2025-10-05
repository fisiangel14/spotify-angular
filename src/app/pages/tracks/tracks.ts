import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionGeneric } from '@shared/components/section-generic/section-generic';
import * as dataRaw from '../../data/tracks.json'
import { TrackModel } from '@app/core/models/tracks.model';
import { Track } from './services/track';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [CommonModule, SectionGeneric],
  templateUrl: './tracks.html',
  styleUrl: './tracks.css'
})
export class Tracks implements OnInit, OnDestroy {

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = [];
  constructor(private trackService: Track) { }


  mockTracksList = []

  ngOnInit(): void {
      // const {data}: any = (dataRaw as any).default;
      // this.mockTracksList = data;
      const observer1$  = this.trackService.dataTracksTrending$.subscribe(
        response => {
          this.tracksTrending = response;
          this.tracksRandom = response;
          console.log('Camciomnes treding', response);
          // this.tracksRandom = response.sort( () => Math.random() - 0.5 );
        });

      const observer2$ = this.trackService.dataTracksRandom$.subscribe(
        response => {
          this.tracksRandom = [...this.tracksRandom, ...response]
          console.log('Canciones random entrando', response);
        }
      )  
        
      this.listObservers$ = [observer1$, observer2$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
      
  }
}
