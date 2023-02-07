import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from '../components/movies-dashboard/movies-dashboard.component';
import { ActorsComponent } from '../components/actors-dashboard/actors-dashboard.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'actors', component: ActorsComponent },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
