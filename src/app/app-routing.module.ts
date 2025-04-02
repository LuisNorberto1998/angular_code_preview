import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AboutPageComponent } from './about/about-page/about-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },  // Ruta para la página de inicio
  { path: 'about', component: AboutPageComponent },  // Ruta para la página "About"
  { path: '**', redirectTo: '' }  // Ruta por defecto (404, redirige a Home)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
