import { FormGroup } from "@angular/forms";

export function usuarioSenhaIguaisValidator(formGroup: FormGroup){
  // ?? é um ternário
  const userName = formGroup.get('userName')?.value ?? '';

  const password = formGroup.get('password')?.value ?? '';
  //trim : existir
  if(userName.trim() + password.trim()){
    return userName !== password ? null:{senhaIgualUsuario:true};
  } else {
    return null;
  }
}
