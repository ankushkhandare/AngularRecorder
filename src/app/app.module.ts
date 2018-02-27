import { LoginModule } from './Pages/login/login.module';
import { AudioComponent } from './Pages/audio/audio.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SearchComponent } from './Pages/shared-modules/search/search.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { HomeComponent } from './Pages/home/home.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { HeaderComponent } from './Pages/shared-modules/header/header.component';
import { FooterComponent } from './Pages/shared-modules/footer/footer.component';
import { SharedModulesModule } from './Pages/shared-modules/shared-modules.module';
import { VideoComponent } from './Pages/video/video.component';
import { WindowRef } from './Pages/audio/window.service';
import { DashboardModule } from './Pages/dashboard/dashboard.module';
import { HomeModule } from './Pages/home/home.module';
import { SignupModule } from './Pages/signup/signup.module';
import { VideoModule } from './Pages/video/video.module';
import { AudioModule } from './Pages/audio/audio.module';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModulesModule,
    LoginModule,
    DashboardModule,
    HomeModule,
    SignupModule,
    AudioModule,
    VideoModule
  ],
  providers: [WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
