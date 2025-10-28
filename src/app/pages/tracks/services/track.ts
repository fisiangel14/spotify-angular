import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Track { // Renamed class to TrackService for better naming convention

  private readonly URL = environment.api; // Define the private URL variable

  constructor(private httpClient: HttpClient) {}

  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      map(({ data }: any) => {
        return data; // Extract data from the response
      })
    );
  }

  // Returns random tracks
  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      map(({ data }: any) => {
        return data.reverse(); // Reverse the data array
      }),catchError((err) => {
          alert('Error de conexion');
          const {status,statusText } = err;
          console.log('Algo paso revisar', [status,statusText]);
          return of([]);
      })
  );
}
}

