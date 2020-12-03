import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { FooterComponent } from './footer/footer.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';

@NgModule({
  declarations: [
    NavBarComponent,
    HeroComponent,
    OurServiceComponent,
    TestimonialsComponent,
    HowItWorksComponent,
    FooterComponent,
    CallToActionComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    HeroComponent,
    OurServiceComponent,
    TestimonialsComponent,
    HowItWorksComponent,
    FooterComponent,
    CallToActionComponent]
})
export class ComponentsModule { }
