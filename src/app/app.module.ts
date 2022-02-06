import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { ReactformsComponent } from './reactforms/reactforms.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TemplateComponent } from './template/template.component';
import { ReactiveForms1Component } from './reactive-forms1/reactive-forms1.component';
import { CustomPipePipe } from './custom-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SimpleTableComponent,
    ReactformsComponent,
    TemplateComponent,
    ReactiveForms1Component,
    CustomPipePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
