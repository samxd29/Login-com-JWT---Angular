import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { minusculoValidator } from './minusculo.validators';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioExisteService } from './usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private novoUsuarioService:NovoUsuarioService,
    private usuarioExistenteService: UsuarioExisteService,
    private router: Router,
    ){}

  ngOnInit() :void{
    //Modelo de formulário reativo: formBuilder
    this.novoUsuarioForm = this.formBuilder.group({
      //validações com os Validators
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [minusculoValidator], [this.usuarioExistenteService.usuarioJaExiste()]],
      password: [''],},
      { validators: [usuarioSenhaIguaisValidator],}
    );
  }

  cadastrar(){
    if(this.novoUsuarioForm.valid){
      //só estamos fazendo esse casting pra novo usuário pq as informações são as mesmas;
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(()=> {
        console.log("estou sendo chamado!")
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
      }
      );
    }


  }
}
