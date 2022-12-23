import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httoClient : HttpClient, private usuarioService: UsuarioService) { }
  //por padrão o angular pega somente o body da requisição, só que agora queremos o header
  //quero pegar a requisição inteira, usename e usuario por exemplo.
  autenticar(usuario : string, senha: string): Observable<HttpResponse<any>> {
    return this.httoClient.post('http://localhost:3000/user/login', {
      userName: usuario,
      password: senha,
    },
    {observe:'response'}
    ).pipe(
      tap((res) => { const authToken= res.headers.get('x-access-token') ?? '';
      this.usuarioService.salvaToken(authToken);
    })
    );
  }
}
