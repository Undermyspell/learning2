import { SpinnerComponent } from './spinner/spinner.component';
import { NgModule } from '@angular/core';
import { ThemeableDirective } from "./directives/themeable.directive";
import { ImageClassDirective } from "./directives/image-class.directive";
import { ScaleDirective } from "./directives/scale.directive";
import { AuthGuard } from "./guards/auth.guard";
import { EditableComponent } from './components/editable/editable.component';
import { ViewModeDirective } from './directives/viewmode.directive';
import { EditModeDirective } from './directives/editmode.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SpinnerComponent,
    ImageClassDirective,
    ThemeableDirective,
    ScaleDirective,
    EditableComponent,
    ViewModeDirective,
    EditModeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    ImageClassDirective,
    ThemeableDirective,
    ScaleDirective,
    EditableComponent,
    ViewModeDirective,
    EditModeDirective
  ],
  providers: [
    AuthGuard
  ],
})
export class SharedModule { }
