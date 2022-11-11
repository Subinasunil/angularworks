import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { CubeComponent } from './cube/cube.component';
import { FactorialComponent } from './factorial/factorial.component';
import { SmartsubComponent } from './smartsub/smartsub.component';
import {FormsModule} from '@angular/forms';
import { IntrestComponent } from './intrest/intrest.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MultiplicationComponent } from './multiplication/multiplication.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    CubeComponent,
    FactorialComponent,
    SmartsubComponent,
    IntrestComponent,
    HomeComponent,
    MultiplicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
