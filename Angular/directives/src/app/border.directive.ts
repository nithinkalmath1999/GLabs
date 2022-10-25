import { Directive, ElementRef,HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective implements OnInit{

  constructor( private element:ElementRef , private renderer:Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement,'background-color','#3D3D3D')
    this.renderer.setStyle(this.element.nativeElement,'width','130px')
    this.renderer.setStyle(this.element.nativeElement,'padding','15px')
    this.renderer.setStyle(this.element.nativeElement,'color','white')
    this.renderer.setStyle(this.element.nativeElement,'border-radius','20px')
    this.renderer.setStyle(this.element.nativeElement,'box-shadow','rgba(0, 0, 0, 0.35) 0px 5px 15px')

  }

    @HostListener('mouseenter') mouseOver(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','#5690BE');
    this.renderer.setStyle(this.element.nativeElement,'color','white');

  }

  @HostListener('mouseleave') mouseLeave(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','white');
    this.renderer.setStyle(this.element.nativeElement,'color','#5690BE');

  }
}
