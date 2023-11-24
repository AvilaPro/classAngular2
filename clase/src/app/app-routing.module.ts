import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PadreComponent } from './components/padre/padre.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { controlHoraGuard } from './guards/control-hora.guard';
import { HttpComponent } from './components/http/http.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'padre',
    component: PadreComponent
  },
  {
    path: 'pipe',
    component: PipeComponent,
    canActivate: [controlHoraGuard]
  },
  {
    path: 'http',
    component: HttpComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
