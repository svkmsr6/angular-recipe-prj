import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen:boolean = false;
  constructor(private elementRef:ElementRef, private renderer:Renderer2) { }

  @HostListener('click') toggleDropdown(){
    this.isOpen = !this.isOpen;
  }

}
