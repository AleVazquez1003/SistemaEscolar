import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AsignmentListComponent } from './Components/Assignment/asignment-list/asignment-list.component'
import { ScheduleListComponent } from './Components/Schedule/schedule-list/schedule-list.component';
import { TurnListComponent } from './Components/Turn/turn-list/turn-list.component';
import { ProfessorListComponent } from './Components/Professor/professor-list/professor-list.component';
import { ProfessorCreateComponent } from './Components/Professor/professor-create/professor-create.component';
import { ProfessorUpdateComponent } from './Components/Professor/professor-update/professor-update.component';
import { ProfessorDeleteComponent } from './Components/Professor/professor-delete/professor-delete.component';

//Enrutado de componentes para sus vistas
export const routes: Routes = 
[
    //Rutas de Servicios

    //Rutas de Professor
    {path: 'Professor', component: ProfessorListComponent},
    {path: 'Professor/create', component: ProfessorCreateComponent},
    {path: 'Professor/update/:id', component: ProfessorUpdateComponent },
    {path: 'Professor/delete/:id', component: ProfessorDeleteComponent},

    {path: '', redirectTo: 'home', pathMatch: 'full'}, //si la ruta está vacía nos redirecciona a home
    {path: 'Assigment', component: AsignmentListComponent},
    {path: 'Schedule', component: ScheduleListComponent},
    {path: 'Turn', component: TurnListComponent},

    {path: 'home', component: HomeComponent}
];
