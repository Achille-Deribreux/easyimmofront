import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {LoginService} from "../../login.service";
import {User} from "../../models/user-model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


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
    this.loginService.register(user);
  }

}
