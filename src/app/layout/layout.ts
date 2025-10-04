import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from '@shared/components/side-bar/side-bar';
import { MediaPlayer } from '@app/shared/components/media-player/media-player';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, SideBar, MediaPlayer],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
