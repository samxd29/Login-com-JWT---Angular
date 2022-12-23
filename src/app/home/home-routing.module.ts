import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // elemento de sub rota
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'novousuario',
        component: NovoUsuarioComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
