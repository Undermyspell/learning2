import { Directive, Renderer2, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[scale]'
})
export class ScaleDirective implements OnInit {

  factor: number = 1;

  @Input('scale')
  set scaling(factor: number) {
    this.factor = factor;
  }

  constructor(private renderer: Renderer2,
    private element: ElementRef) { }
  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement.children[0], 'transform', `scale(${this.factor})`);
  }
}
