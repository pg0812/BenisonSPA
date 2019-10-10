import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.elRef.nativeElement.style.backgroundColor = 'lightgrey';
  }
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }



