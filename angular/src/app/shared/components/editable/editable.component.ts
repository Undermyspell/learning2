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
export class EditableComponent implements OnInit {
  @Output() update = new EventEmitter();
  @Input() edit$: Observable<boolean>;

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

  ngOnInit() {
    // this.viewModeHandler();
    // this.editModeHandler();
    this.edit$.subscribe((editable) => {
      if (editable) {
        this.mode = 'edit';
        // this.editMode.next(true);
      } else {
        this.mode = 'view'
        this.update.emit();
      }
    });
  }

  // private viewModeHandler() {
  //   // fromEvent(this.element, 'dblclick').pipe(
  //   // ).subscribe(() => {
  //   //   this.mode = 'edit';
  //   //   this.editMode.next(true);
  //   // });
  // }

  // private editModeHandler() {
  //   // const clickOutside$ = fromEvent(document, 'click').pipe(
  //   //   filter(({ target }) => this.element.contains(target) === false),
  //   //   take(1)
  //   // )

  //   // this.editMode$.pipe(
  //   //   switchMapTo(clickOutside$),
  //   // ).subscribe(event => {
  //   //   this.update.next();
  //   //   this.mode = 'view';
  //   // });
  // }
}
