import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from "./guards/auth.guard";
import { NotAuthenticatedComponent } from "./components/not-authenticated/not-authenticated.component";
import { registerGuard } from "./guards/register.guard";
import { AboutChild1Component } from './components/about-child1/about-child1.component';
import { AboutChild2Component } from './components/about-child2/about-child2.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent, canDeactivate: [registerGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [authGuard] },
  {
    path: 'about', component: AboutComponent, children: [
      { path: 'about-child1', component: AboutChild1Component },
      { path: 'about-child2', component: AboutChild2Component },
    ] ,canActivateChild: [authGuard]     
  },
  { path: 'notAuthenticated', component: NotAuthenticatedComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
