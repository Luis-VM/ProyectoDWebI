import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { AcercaDe } from './page/acerca-de/acerca-de';

export const routes: Routes = [
{path:"Inicio",component:Inicio},
{path:"AcercaDe",component:AcercaDe},
{path:"**",component:Inicio},
];