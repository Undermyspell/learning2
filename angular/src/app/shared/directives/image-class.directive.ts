import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[imageClass]'
})
export class ImageClassDirective implements OnInit {

  classes: string[] = ["card-tall", "card-wide", "card-big"]

  constructor(private readonly element: ElementRef,
    private readonly renderer: Renderer2) { }

  ngOnInit(): void {
    const index: number = Math.floor((Math.random() * (this.classes.length + 1)));
    if (index < this.classes.length) {
      this.renderer.addClass(this.element.nativeElement, this.classes[index]);
    }
  }
}
