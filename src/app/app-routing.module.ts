import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';

const routes: Routes = [

  {path: 'Home',      component: HomeComponent},
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path: '**', pathMatch: 'full', redirectTo: '/'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
