import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus.component';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';

@NgModule({
  imports: [
    CommonModule,SharedModulesModule
  ],
  declarations: [AboutusComponent],
  exports: [AboutusComponent]
})
export class AboutusModule { }
