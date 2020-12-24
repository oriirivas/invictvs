import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { MedalsComponent } from './modules/medals/medals.component';
import { InstructorsComponent } from './modules/instructors/instructors.component';
import { EventsComponent } from './modules/events/events.component';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
    },
    {
        path: 'medallas',
        component: MedalsComponent
    },
    {
        path: 'instructores',
        component: InstructorsComponent
    },
    {
        path: 'eventos',
        component: EventsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}