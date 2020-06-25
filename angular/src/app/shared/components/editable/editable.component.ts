import { Component, Output, EventEmitter, ContentChild, ElementRef, TemplateRef, Input } from '@angular/core';
import { ViewModeDirective } from "../../directives/viewmode.directive";
import { EditModeDirective } from "../../directives/editmode.directive";

@Component({
  selector: 'editable',
  template: `
     <ng-container *ngTemplateOutlet="currentView"></ng-container>
  `,
  styles: [
  ]
})
export class EditableComponent {

  public edit() {
    this.mode = "edit";
  }

  public view() {
    this.mode = "view";
    this.update.emit();
  }

  @Output() update = new EventEmitter();

  @ContentChild(ViewModeDirective, { read: TemplateRef }) viewModeTpl: TemplateRef<ViewModeDirective>;
  @ContentChild(EditModeDirective, { read: TemplateRef }) editModeTpl: TemplateRef<EditModeDirective>;

  mode: 'view' | 'edit' = 'view';

  constructor(public elementRef: ElementRef) {
  }

  get currentView() {
    return this.mode === 'view' ? this.viewModeTpl : this.editModeTpl;
  }
}
