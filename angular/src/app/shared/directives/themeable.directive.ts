import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { Theme } from "../../enums/theme.enum";

@Directive({
  selector: '[themeable]'
})
export class ThemeableDirective {

  @Input("themeable")
  set theme(theme: Theme) {
    this.applyTheme(theme);
  }

  public toggleSolar(): void {
    this.element.nativeElement.classList.contains("solar") ?
      this.renderer.removeClass(this.element.nativeElement, "solar") :
      this.renderer.addClass(this.element.nativeElement, "solar");
  }

  constructor(private readonly element: ElementRef,
    private readonly renderer: Renderer2) { }

  private applyTheme(theme: Theme) {
    this.renderer.removeClass(this.element.nativeElement, Theme.light);
    this.renderer.removeClass(this.element.nativeElement, Theme.dark);
    this.renderer.addClass(this.element.nativeElement, theme);
  }
}
