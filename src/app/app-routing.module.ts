import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AdminComponent} from './components/admin/admin.component';
import {AboutComponent} from './components/about/about.component';
import {RegisterComponent} from './components/register/register.component';
import {authGuard} from "./guards/auth.guard";
import {NotAuthenticatedComponent} from "./components/not-authenticated/not-authenticated.component";
import {registerGuard} from "./guards/register.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent, canDeactivate: [registerGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [authGuard]},
  {path: 'about', component: AboutComponent},
  {path: 'notAuthenticated', component: NotAuthenticatedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
