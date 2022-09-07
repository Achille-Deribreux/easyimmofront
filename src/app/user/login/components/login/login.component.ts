import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {User} from "../../models/user-model";
import {LoginService} from "../../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
              ) { }

  ngOnInit(): void {
  }

  formValues = this.formBuilder.group({
    username:new FormControl(''),
    password:new FormControl(''),
  })

  onSubmit() {
    let user : User = new User(this.formValues.value.username, this.formValues.value.password);
    this.loginService.login(user);
  }

}
