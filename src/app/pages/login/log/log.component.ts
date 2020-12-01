import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserCredential } from 'src/app/interface/user';
import { LogService } from 'src/app/services/log.service';
import { environment } from 'src/environments/environment';
import swal from 'sweetalert';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email: ["", Validators.required],
    password: ["", [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder, private logUser: LogService, private route: Router) {

  }

  ngOnInit(): void {
    this.userLogin()
  }

  userLogin() {
    const token = localStorage.getItem(environment.localStorageToken)
    if (token != null) { this.route.navigate(["home"]) }
  }

  submit() {
    const { email, password } = this.loginForm.value
    const credential: IUserCredential = { email: email, password: password }
    swal({ title: "Cargando...", icon: "info", buttons: [false], closeOnClickOutside: false })
    this.logUser.log(credential).subscribe(auth => {
      localStorage.setItem(environment.localStorageToken, auth.token)
      swal({ title: "Ok!", icon: "success", buttons: [false], timer: 2000 })
      this.userLogin()
    }, e => {
      this.cleanForm()
      swal({ title: "Usuario o contraseña invalidos", icon: "error", buttons: [false], timer: 2000 })
    })
  }

  cleanForm() {
    this.loginForm.patchValue({ email: "", password: "" })
  }

  get emailValid() {
    const control = this.loginForm.get("email")
    return control.valid && control.touched
  }
  get passwordValid() {
    const control = this.loginForm.get("password")
    return control.valid && control.touched
  }

}
