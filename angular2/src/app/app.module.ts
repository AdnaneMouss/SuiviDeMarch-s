import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { UserListComponent } from './user-list/user-list.component';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import { HeaderComponent } from './header/header.component';
import { CpsComponent } from './cps/cps.component';
import { CpsListComponent } from './cps-list/cps-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    UserListComponent,
    HeaderComponent,
    CpsComponent,
    CpsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    LoginComponent
  ],
  providers: [
    // Enable fetch for HTTP requests
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
