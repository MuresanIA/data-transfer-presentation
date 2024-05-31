import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        title: 'Promise', path: 'promise', loadComponent: () => import('./promises/promise-example/promise-example.component')
    },
    { title: 'Observable', path: 'observable', loadComponent: () => import('./observables/observable-example/observable-example.component')}
];
