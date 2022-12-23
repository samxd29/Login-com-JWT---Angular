import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  //convenção para falar que é um observable;
  user$ = this.usuarioService.retornaUsuario();

  constructor(private usuarioService:UsuarioService, private router: Router){}

  logout(){
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}
