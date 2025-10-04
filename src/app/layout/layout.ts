import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from '@shared/components/side-bar/side-bar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, SideBar],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
