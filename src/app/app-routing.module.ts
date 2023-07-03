import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/Login/Login.component';
import { ParentProfileComponent } from './components/ParentProfile/ParentProfile.component';
import { AuthGuard } from './auth-guard-service';
import { RegisterComponent } from './components/Register/register.component';

let routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},

  {path:'parent-profile', component: ParentProfileComponent, canActivate:[AuthGuard],},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
