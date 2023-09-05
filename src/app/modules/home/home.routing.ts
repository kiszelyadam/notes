import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeResolver } from '../../resolvers/home.resolver';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {data: HomeResolver}
  },
];
