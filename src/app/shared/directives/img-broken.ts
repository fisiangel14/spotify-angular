import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBroken {

  @Input() customImg: string = '';

  @HostListener('error') handleError():void{
    const elNative = this.elHost.nativeElement;
    console.log('Error al cargar la imagen-->', this.elHost);
    // elNative.src = 'assets/images/imgBroken.png';
    elNative.src = this.customImg;
  }

  constructor(private elHost: ElementRef) {
    console.log(this.elHost);
   }
   
}
