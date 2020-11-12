import { AuthGuard } from './shared/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from "./gallery/container/container.component";
import { SpinnerComponent } from "./shared/spinner/spinner.component";
import { DefaultComponent } from "./default/default.component";
import { LoginComponent } from "./home/login/login.component";
import { EventContainerComponent } from "./event/container/event/event.container.component";
import { CloudFuncsContainerComponent } from "./cloud-funcs/cloudfuncs.container.component";

const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  { path: 'default', component: DefaultComponent },
  { path: 'login', component: LoginComponent },
  { path: 'gallery', component: ContainerComponent, canActivate: [AuthGuard] },
  { path: 'events', component: EventContainerComponent, canActivate: [AuthGuard] },
  { path: 'funcs', component: CloudFuncsContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
