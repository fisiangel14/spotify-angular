import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@app/core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Track {

  // dataTracksTrending$: Observable<TrackModel[]> = of([]);
  // dataTracksRandom$: Observable<any> = of([]);

  private readonly URL = environment.api // definimos la variable privada URL y vemos que hace un import debe ser el de desarrollo.

  constructor(private httpClient: HttpClient) {
  }

  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`) // ojo aqui se usa comilla invertida que permite concatenar
  }
  
}
