import { SharedModulesModule } from './../shared-modules/shared-modules.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';

@NgModule({
  imports: [
    CommonModule,SharedModulesModule
  ],
  declarations: [VideoComponent]
})
export class VideoModule { }
