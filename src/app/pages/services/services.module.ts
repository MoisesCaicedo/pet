import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ServiceComponent } from './services/service.component';



@NgModule({
  declarations: [ServiceComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    ComponentsModule
  ]
})
export class ServiceModule { }
