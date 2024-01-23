import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroPage } from './intro.page';
import { IntroPageRoutingModule } from './intro-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    IntroPageRoutingModule
  ],
  declarations: [IntroPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class introPageModule { }
