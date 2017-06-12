import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {


  constructor(
    private elementRef: ElementRef,
    private rengerer: Renderer2) { }

  ngOnInit(): void {
    this.rengerer.setStyle(
      this.elementRef.nativeElement,
      'background-color', 'blue');
  }


  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.rengerer.setStyle(
      this.elementRef.nativeElement,
      'background-color', 'red');
  }


  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.rengerer.setStyle(
      this.elementRef.nativeElement,
      'background-color', 'blue');
  }
}
