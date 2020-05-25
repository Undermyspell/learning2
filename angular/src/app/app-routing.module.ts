import { AuthGuard } from './shared/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from "./gallery/container/container.component";
import { SpinnerComponent } from "./shared/spinner/spinner.component";
import { DefaultComponent } from "./default/default.component";
import { LoginComponent } from "./home/login/login.component";

const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  { path: 'default', component: DefaultComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'gallery', component: ContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
