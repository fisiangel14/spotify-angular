import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideBar } from '@shared/components/side-bar/side-bar';
import { MediaPlayer } from '@shared/components/media-player/media-player';
import { HeaderUser } from '@shared/components/header-user/header-user';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, SideBar, MediaPlayer, HeaderUser],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
