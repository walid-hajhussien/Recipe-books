import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  private renderer: Renderer2;
  private elementRef: ElementRef;
  private open: boolean;

  constructor(elementRef: ElementRef, renderer: Renderer2) {

    this.renderer = renderer;
    this.elementRef = elementRef;
    this.open = false;


  }

  ngOnInit(): void {

  }


  @HostListener('click') onClick() {
    if (this.open) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
      this.open = false;
    } else {
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
      this.open = true;
    }
  }






}
