import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogGuard } from './guard/log.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },

  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'home', canActivate: [LogGuard], loadChildren: () => import("./pages/home/home-routing.module").then(m => m.HomeRoutingModule) },
  { path: "**", pathMatch: "full", component: NotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
