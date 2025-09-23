import { Component } from '@angular/core';
import { SectionGeneric } from '@shared/components/section-generic/section-generic';  
@Component({
  selector: 'app-tracks-page',
  imports: [SectionGeneric],
  templateUrl: './tracks-page.html',
  styleUrl: './tracks-page.css'
})
export class TracksPage {
mockTracksList = [ {
name: 'BEBE (Oficial)'
    },
    {
name: 'BEBE (Oficial)'
    },
    {
name: 'BEBE (Oficial)'
    }
  ]
}
