import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionGeneric } from '@shared/components/section-generic/section-generic';
import { TrackModel } from '@app/core/models/tracks.model';
import { Track } from './services/track';   // servicio
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

  ngOnInit(): void {
    this.trackService.getAllTracks$().subscribe((response:any) => {
      // this.tracksTrending = response.data;
      // this.tracksRandom = response.data.sort( () => Math.random() - 0.5 );
      console.log('--->',response);
    });
  }

  ngOnDestroy(): void {
    // this.listObservers$.forEach(u => u.unsubscribe());
      
  }
}
