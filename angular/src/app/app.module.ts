// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProjectComponent } from './projects/project.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms'; // Import routing module

@NgModule({
  declarations: [AppComponent, ProjectComponent], // Declare your components here
  imports: [BrowserModule, AppRoutingModule, FormsModule], // Import the routing module
  providers: [],
  bootstrap: [AppComponent], // Bootstrap AppComponent
})
export class AppModule {}
