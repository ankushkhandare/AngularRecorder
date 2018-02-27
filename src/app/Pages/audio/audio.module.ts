import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioComponent } from './audio.component';
import { WindowRef } from './window.service';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';

@NgModule({
  imports: [
    CommonModule,SharedModulesModule
  ],
  declarations: [AudioComponent],

})
export class AudioModule { }
