import { ArtistModel } from './artist.model';

export interface TrackModel {
  _id: string | number; // 👈 ya lo usas en CardPlayer
  name: string;      // 👈 ya lo usas en CardPlayer
  album: string;     // 👈 ya lo usas en CardPlayer
  cover: string;     // 👈 ya lo usas en CardPlayer (URL a la carátula)
  duration?: number; // en segundos (opcional)
  url: string;      // URL del audio (opcional)
  artist?: ArtistModel;   // relación opcional
  // Si tu mock actual guarda solo el nombre del artista, puedes usar:
  // artistName?: string;
}
