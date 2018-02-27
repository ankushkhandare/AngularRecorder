import { AboutusModule } from './../aboutus/aboutus.module';
import { HeaderComponent } from './../shared-modules/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';
import { FooterComponent } from '../shared-modules/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,SharedModulesModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
