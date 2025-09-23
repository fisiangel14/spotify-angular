import { Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-section-generic',
  imports: [CommonModule, NgClass],
  templateUrl: './section-generic.html',
  styleUrl: './section-generic.css'
})
export class SectionGeneric {
  @Input() title: string = '';
  @Input() mode: 'small' | 'big' = 'big';
  @Input() dataTracks: Array<any> = [];
}
