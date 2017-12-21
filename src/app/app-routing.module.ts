import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { LogsComponent } from './logs/logs.component'
import { LoginComponent } from './login/login.component'

import { RefrigeratorComponent } from './refrigerator/refrigerator.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'refrigerator',
    component: RefrigeratorComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logs',
    component: LogsComponent,
  },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
