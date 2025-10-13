import { Multimedia } from './../../services/multimedia';
import { TrackModel } from '@app/core/models/tracks.model';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as dataRaw from '../../../data/tracks.json';
import { OrderListPipe } from "../../pipe/order-list-pipe";

@Component({
  selector: 'app-play-list-body',
  standalone: true,
  imports: [CommonModule, OrderListPipe],
  templateUrl: './play-list-body.html',
  styleUrl: './play-list-body.css'
})
export class PlayListBody implements OnInit {
  tracks: TrackModel[] = [];
  optionSort: {property: string|null, order: string} = {property: null, order: 'asc'};
  contador: number = 0;

  constructor(private multimediaService: Multimedia) {}

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default;
    this.tracks = data;
  }

  changSort(property: string):void{
    const {order} = this.optionSort;
    this.optionSort = {
      property, 
      order: order === 'asc' ? 'desc' : 'asc'};
  }

  sendPlay(track: TrackModel): void{
    console.log('Enviando  canción al media-player', track);
    this.multimediaService.callback.emit(track);
  }

}
