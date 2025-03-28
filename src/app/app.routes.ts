import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AsignmentListComponent } from './Components/Assignment/asignment-list/asignment-list.component'
import { ScheduleListComponent } from './Components/Schedule/schedule-list/schedule-list.component';
import { TurnListComponent } from './Components/Turn/turn-list/turn-list.component';

//Enrutado de componentes para sus vistas
export const routes: Routes = 
[
    //Prueba 
    {path: 'home', component: HomeComponent},

    //Rutas de Servicios
    {path: 'Assigment', component: AsignmentListComponent},
    {path: 'Schedule', component: ScheduleListComponent},
    {path: 'Turn', component: TurnListComponent}

];
