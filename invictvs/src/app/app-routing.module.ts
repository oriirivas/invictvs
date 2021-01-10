import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { MedalTableComponent } from './modules/medal-table/medal-table.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'medals/:id',
        component: MedalTableComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        component: HomeComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}