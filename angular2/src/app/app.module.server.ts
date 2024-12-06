// app.module.server.ts
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';  // Import ServerModule for SSR
import { AppModule } from './app.module';  // Import AppModule (client-side module)
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,  // Import AppModule (client-side)
    ServerModule
  ],
  bootstrap: [AppComponent]  // Bootstrap the app component
})
export class AppServerModule {}
