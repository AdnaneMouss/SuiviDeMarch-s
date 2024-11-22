import { bootstrapApplication } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: HttpClientModule, useClass: HttpClientModule }, // Add HttpClientModule to providers
  ]
}).catch((err) => console.error(err));
