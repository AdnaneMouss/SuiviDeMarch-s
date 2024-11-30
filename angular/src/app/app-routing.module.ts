// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './projects/project.component'; // Import your component

const routes: Routes = [
  { path: '', component: ProjectComponent } // Set the default route to ProjectComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configure the router
  exports: [RouterModule]
})
export class AppRoutingModule {}
