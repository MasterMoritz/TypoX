import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './authentication/guards/auth.guard';
import { HeaderComponent } from './navigation/header/header.component';
import { LoginGuard } from './authentication/guards/login.guard';
import { MainComponent } from './equation/components/main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'test', component: HeaderComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
