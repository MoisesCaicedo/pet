import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogGuard } from './guard/log.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: '', canActivate: [LogGuard], loadChildren: () => import("./pages/private-routing.module").then(m => m.PrivateRoutingModule) },
  { path: "**", pathMatch: "full", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
