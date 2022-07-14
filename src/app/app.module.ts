import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [DatePipe,],
  bootstrap: [AppComponent]
})
export class AppModule { }
