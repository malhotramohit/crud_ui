import { HostBinding, HostListener, Directive } from '@angular/core';

@Directive({
    selector : '[appDropdown]'
})
export class DropdwonDirective{
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }
}