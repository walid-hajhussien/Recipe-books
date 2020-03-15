import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

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

  @HostBinding('class.open') isOpen = false;

  ngOnInit(): void {

  }


  // @HostListener('click', ['$event']) toggleOpen(event: Event) {
  //   console.log(event)
  //   this.isOpen = ! this.isOpen;
  // }

@HostListener('document:click', ['$event']) onClickAny(event: Event) {
    console.log(event.target)
    this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
}
  // @HostListener('click') onClick() {
  //   if (this.open) {
  //     this.renderer.removeClass(this.elementRef.nativeElement, 'open');
  //     this.open = false;
  //   } else {
  //     this.renderer.addClass(this.elementRef.nativeElement, 'open');
  //     this.open = true;
  //   }
  // }






}
