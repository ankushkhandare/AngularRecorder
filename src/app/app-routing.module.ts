import { HomeComponent } from './Pages/home/home.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { LoginComponent } from './Pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AudioComponent } from './Pages/audio/audio.component';
import { VideoComponent } from './Pages/video/video.component';





const routes: Routes = [
  {
    path: "",
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'audio',
    component: AudioComponent
  },
  {
    path: 'video',
    component: VideoComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
    //   children:[
    //     {
    //       path:'cart',
    //       component:CartComponent
    //     },
    //     {
    //       path:'products',
    //       component:ProductComponent,
    //       children:[
    //         {
    //           path:'showdetails',
    //           component:ShowdetailsComponent
    //         },
    //         {
    //           path:'showall',
    //           component:ShowallproductsComponent
    //         }
    //       ]
    //     },
    //     {
    //       path:'searchresult',
    //       component:SearchresultComponent
    //     }
    //   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
