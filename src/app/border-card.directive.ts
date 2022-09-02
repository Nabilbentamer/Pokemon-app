import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[PkmnBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setHeight(180);
    this.setBorderColor('#f5f5f5')
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorderColor('#009688');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorderColor('#f5f5f5');
  }
  setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }

  setBorderColor(color: string) {
    let border = '4px solid' + color;
    this.el.nativeElement.style.border = border;
  }


}
