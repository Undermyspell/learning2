import { Component, OnInit, Output, EventEmitter, ContentChild, ElementRef, TemplateRef, Input } from '@angular/core';
import { ViewModeDirective } from "../../directives/viewmode.directive";
import { EditModeDirective } from "../../directives/editmode.directive";
import { fromEvent, Subject } from "rxjs";
import { switchMapTo, filter, take } from "rxjs/operators";
import { Observable } from "apollo-link";

@Component({
  selector: 'editable',
  template: `
     <ng-container *ngTemplateOutlet="currentView"></ng-container>
  `,
  styles: [
  ]
})
export class EditableComponent {
  @Output() update = new EventEmitter();

  @Input("edit")
  set editable(editable: boolean) {
    if (editable && this.mode === "view") {
      this.mode = "edit";
    }
    if (!editable && this.mode === "edit") {
      this.mode = "view";
      this.update.emit();
    }
  }
  @Input() value: string;

  @ContentChild(ViewModeDirective, { read: TemplateRef }) viewModeTpl: TemplateRef<ViewModeDirective>;
  @ContentChild(EditModeDirective, { read: TemplateRef }) editModeTpl: TemplateRef<EditModeDirective>;

  mode: 'view' | 'edit' = 'view';

  editMode = new Subject();
  editMode$ = this.editMode.asObservable();

  constructor() {
  }

  get currentView() {
    return this.mode === 'view' ? this.viewModeTpl : this.editModeTpl;
  }
}
