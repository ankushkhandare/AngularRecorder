import { AppRoutingModule } from './../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    FooterComponent,
    NotificationComponent,
    HeaderComponent,
    SearchComponent,
    FilterComponent
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    FooterComponent
  ]

})
export class SharedModulesModule { }
