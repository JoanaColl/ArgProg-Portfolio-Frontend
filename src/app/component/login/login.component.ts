import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginUsuario } from 'src/app/model/login-usuario.model';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.activeModal.close();
        window.location.reload();
        // this.router.navigate(['']);
      }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.showError();
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      })
  }

  showError(){
    Swal.fire({
      icon: 'error',
      title: '¡Error!',
      html: '<b>usuario</b> o <b>contraseña</b> inválidos',
      showConfirmButton: false,
      timer: 3000
    })
  }
}