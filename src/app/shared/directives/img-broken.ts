import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBroken {

  @HostListener('error') hableError():void{
    const elNative = this.elHost.nativeElement;
    console.log('Error al cargar la imagen-->', this.elHost);
    elNative.src ='../../../../assets/images/imgBroken.png'
  }

  constructor(private elHost: ElementRef) {
    console.log(this.elHost);
   }

}
