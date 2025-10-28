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

    this.loadDataAll()
    this.loadDataRandom()

  }  

  async loadDataAll(): Promise<any>{
      this.tracksTrending = await this.trackService.getAllTracks$().toPromise();
      //   .subscribe((response:TrackModel[]) => {
      // this.tracksTrending = response;
      // // this.tracksRandom = response.data.sort( () => Math.random() - 0.5 );
      // console.log('--->',response);
    
  }
  
  loadDataRandom(): void{
    this.trackService.getAllRandom$().subscribe((response:TrackModel[]) => {
    this.tracksRandom = response; 
      // console.log('--->',response);
    });
  }
  
  

  ngOnDestroy(): void {
    // this.listObservers$.forEach(u => u.unsubscribe());
      
  }
}
