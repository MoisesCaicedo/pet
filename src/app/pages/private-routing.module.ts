import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LogGuard } from '../guard/log.guard';


const routes: Routes = [
  { path: "home", canActivate: [LogGuard], loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: "location", canActivate: [LogGuard], loadChildren: () => import('./location/location.module').then(m => m.LocationModule) },
  { path: "blog", canActivate: [LogGuard], loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: "service", canActivate: [LogGuard], loadChildren: () => import('./services/services.module').then(m => m.ServiceModule) },
  { path: "about", canActivate: [LogGuard], loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: "jobUs", canActivate: [LogGuard], loadChildren: () => import('./job-us/job-us.module').then(m => m.JobUsModule) },
  { path: "**", canActivate: [LogGuard], pathMatch: "full", redirectTo: 'home' }

]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class PrivateRoutingModule { }
