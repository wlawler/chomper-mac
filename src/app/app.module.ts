import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponentComponent } from './container-component/container-component.component';
import { ChomperAdCponentComponent } from './container-componet/Chomper-Ad/chomper-ad-cponent/chomper-ad-cponent.component';
import { ChomperAdDirectiveDirective } from './container-componet/Chomper-Ad/chomper-ad-directive.directive';
import { ChomperAdAComponent } from './container-componet/Chomper-Ad/chomper-ad-a.component';
import { ChomperAdBComponent } from './container-componet/Chomper-Ad/chomper-ad-b.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponentComponent,
    ChomperAdCponentComponent,
    ChomperAdDirectiveDirective,
    ChomperAdAComponent,
    ChomperAdBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
