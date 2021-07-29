import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextareaAutoresize]'
})
@HostListener(':input')

export class TextareaAutoresizeDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener(':input')
  onInput() {
    this.resize();
  }

  ngOnInit() {
    if (this.elementRef.nativeElement.scrollHeight) {
      setTimeout(() => this.resize());
    }
  }

  resize() {
    this.elementRef.nativeElement.style.height = 'auto';
    this.elementRef.nativeElement.style.maxHeight = '400px';
    this.elementRef.nativeElement.style.height = this.elementRef.nativeElement.scrollHeight + 'px';
  }
}
