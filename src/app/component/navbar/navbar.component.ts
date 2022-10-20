import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenService } from 'src/app/service/token.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged = false;
  public isMenuCollapsed = true;
  
  constructor(private router: Router, private tokenService: TokenService, private ngbModal: NgbModal) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    this.router.navigate(['']);
    window.location.reload();
  }

  login(){
    // this.router.navigate(['/login'])
    const modalRef = this.ngbModal.open(LoginComponent, { centered: true });
  }
}