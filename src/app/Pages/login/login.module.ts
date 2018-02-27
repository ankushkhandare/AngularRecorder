import { SharedModulesModule } from './../shared-modules/shared-modules.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModulesModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
