import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'red';
  @Input() highlightColor = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(
    private elementRef: ElementRef,
    private rengerer: Renderer2) { }

  ngOnInit(): void {
    this.rengerer.setStyle(
      this.elementRef.nativeElement,
      'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }


  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.rengerer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color', 'red');
    this.backgroundColor = this.highlightColor;
  }


  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.rengerer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }
}
