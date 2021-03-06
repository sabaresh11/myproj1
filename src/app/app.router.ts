import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListComponent } from './list/list.component';
import {DefaultDispComponent } from './default-disp/default-disp.component';
import {DetailsComponent } from './details/details.component';
export const router : Routes = [
	{ path: '',redirectTo: 'default',pathMatch: 'full'},
	{ path: 'default', component:DefaultDispComponent },
	{ path : 'list' , component:ListComponent},
	{ path : 'list/:id' , component:DetailsComponent}
];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);