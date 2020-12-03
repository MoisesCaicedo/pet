import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: "home", loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: "location", loadChildren: () => import('./location/location.module').then(m => m.LocationModule) },
  { path: "blog", loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: "service", loadChildren: () => import('./services/services.module').then(m => m.ServiceModule) },
  { path: "about", loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: "jobUs", loadChildren: () => import('./job-us/job-us.module').then(m => m.JobUsModule) },
  { path: "**", pathMatch: "full", redirectTo: 'home' }

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PrivateRoutingModule { }
