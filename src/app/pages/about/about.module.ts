import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { AboutRoutingModule } from './about-routing.module';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
