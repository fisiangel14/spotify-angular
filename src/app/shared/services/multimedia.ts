import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Multimedia {
  // amos hacer que desde la tarjeta (card_player) se pase la canción a Media Player.

  callback: EventEmitter<any> = new EventEmitter<any>();

  // Al ser callback de tipo EventEmitter, significa que emite eventos por lo que podemos suscribirnos (para escuchar la emisión) o  emitir (el emisor del dato).

  constructor() { }

}
