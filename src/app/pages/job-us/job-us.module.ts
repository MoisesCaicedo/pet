import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobUsComponent } from './job-us/job-us.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { JobUSRoutingModule } from './job-us-routing.module';



@NgModule({
  declarations: [JobUsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    JobUSRoutingModule
  ]
})
export class JobUsModule { }
