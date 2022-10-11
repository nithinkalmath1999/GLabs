import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { 

  }

  @HostListener('mouseenter') mouseOver(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','red');
  }

  @HostListener('mouseleave') mouseLeave(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','white');
  }

}
