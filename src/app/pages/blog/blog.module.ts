import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { BlogRoutingModule } from './blog-routing.module';



@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
