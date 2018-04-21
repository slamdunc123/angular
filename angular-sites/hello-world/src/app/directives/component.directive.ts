import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  //selector: '[appComponent]'
  selector: '[txtFormatter]'
})
//export class ComponentDirective {
  export class ComponentDirective implements OnInit {

  //}
  constructor(private elementRef: ElementRef) { }

  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor='red';
    this.elementRef.nativeElement.style.fontSize='18px';
    this.elementRef.nativeElement.style.color='white';
    this.elementRef.nativeElement.style.width='240px';
    this.elementRef.nativeElement.style.padding='10px';
  }

  @HostListener('mouseenter') mouseEnterEvent(){
    this.elementRef.nativeElement.style.backgroundColor='green';
  }

  @HostListener('mouseleave') mouseLeaveEvent(){
    this.elementRef.nativeElement.style.backgroundColor='red';
  }

}
