import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {AdminComponent} from './components/admin/admin.component';
import {RegisterComponent} from './components/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { NotAuthenticatedComponent } from './components/not-authenticated/not-authenticated.component'
import { ReactiveFormsModule } from '@angular/forms';
import { AboutChild1Component } from './components/about-child1/about-child1.component';
import { AboutChild2Component } from './components/about-child2/about-child2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AdminComponent,
    RegisterComponent,
    NotAuthenticatedComponent,
    AboutChild1Component,
    AboutChild2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
