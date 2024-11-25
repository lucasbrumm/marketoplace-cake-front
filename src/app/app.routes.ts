import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { CakeComponent } from './cake/cake.component'

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'cake/:id',
    component: CakeComponent,
    title: 'Cake',
  },
]
