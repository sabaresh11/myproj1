import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListComponent } from './list/list.component';
import {DefaultDispComponent } from './default-disp/default-disp.component';
 
export const router : Routes = [
	// { path: '',redirectTo: 'default-disp',pathMatch: 'full'},
	{ path: 'default', component:DefaultDispComponent },
	{ path : 'list' , component:ListComponent}
];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);