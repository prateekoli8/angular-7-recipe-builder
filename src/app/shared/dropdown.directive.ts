import { Directive, HostBinding, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  constructor( private elRef: ElementRef, private renderer: Renderer2 ) { }
  @HostBinding('class.open') isOpen = false;
  ngOnInit() {}

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }


}
