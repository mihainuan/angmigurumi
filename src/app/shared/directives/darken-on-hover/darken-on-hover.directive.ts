import { Directive, ElementRef, HostListener, Input, Renderer, Renderer2 } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {

    @Input() brightness = '70%';

    constructor(
        private el: ElementRef,
        private render2: Renderer2
    ) {}

    @HostListener('mouseover')
    darkenOn(){
        this.render2.setStyle(this.el.nativeElement,'filter',`brightness(${this.brightness})`);
    }
    
    @HostListener('mouseleave')
    darkenOff(){
        this.render2.setStyle(this.el.nativeElement,'filter','brightness(100%)');        
    }

}