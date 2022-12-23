import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';
import { NovoUsuarioService } from './novo-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioSevice: NovoUsuarioService){}

  usuarioJaExiste(){
    return (control: AbstractControl) => {
      //swithMap e pipe: pipe é um método do observable
      //swithMap é uma função ele faz a troca do fluxo da digitação e requisição do back.
      return control.valueChanges.pipe(switchMap((nomeUsuario) => this.novoUsuarioSevice.verificaUsuarioExistente(nomeUsuario)
      ),
      //realiza troca de resultados;
      map((usuarioExiste)=> (usuarioExiste ? {usuarioExistente:true} : null
      ),
      first()
    ));
    };
  }
}
