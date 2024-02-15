import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ALogin } from 'src/app/project/services/API/login/ALogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:string = '';
  constructor(private router:Router, private ALogin:ALogin) { }

  ngOnInit(): void {
  }
  /* login function */
  async login(btn:HTMLButtonElement, user:string, password:string){
    btn.classList.add('loading');
    if(user && password){
      try {
        let response = await this.ALogin.getLogin({user, password}).toPromise();
        localStorage.setItem('netgar-token', response.token);
        this.router.navigate(['/admin']);
      }catch(e){
        this.error = 'Les credencials no son vàlides.'
      }
    } else this.error = 'Posa les credencials.'
    btn.classList.remove('loading');
  }
  // View Actions
  focus(ipt_box:HTMLDivElement){ipt_box.classList.add('active');}
  blur(ipt_box:HTMLDivElement, ipt:HTMLInputElement){ if(!ipt.value) ipt_box.classList.remove('active'); }
  showPassword(pass:HTMLInputElement, icon:HTMLElement){
    if (icon.classList.contains('fa-eye-slash')){
      pass.type = 'text';
      icon.classList.replace('fa-eye-slash', 'fa-eye');
    } else {
      pass.type = 'password';
      icon.classList.replace('fa-eye', 'fa-eye-slash');
    }
  }

}
