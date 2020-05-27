import { SpinnerComponent } from './spinner/spinner.component';
import { NgModule } from '@angular/core';
import { ThemeableDirective } from "./directives/themeable.directive";
import { ImageClassDirective } from "./directives/image-class.directive";
import { ScaleDirective } from "./directives/scale.directive";
import { AuthGuard } from "./guards/auth.guard";


@NgModule({
  declarations: [
    SpinnerComponent,
    ImageClassDirective,
    ThemeableDirective,
    ScaleDirective
  ],
  imports: [],
  exports: [
    SpinnerComponent,
    ImageClassDirective,
    ThemeableDirective,
    ScaleDirective,
  ],
  providers: [
    AuthGuard
  ],
})
export class SharedModule { }
