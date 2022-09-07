import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {User} from "./models/user-model";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private router : Router,
    private http: HttpClient
  ) { }

  backBaseHost = "https://easy-immo-back.herokuapp.com/";
  backDevHost = "http://localhost:8080/";

  login (user:User) : void {
    this.http.post(this.backBaseHost+"login", user,{ observe: 'response'})
      .subscribe(resp => {
        if(resp.status === 200){
          sessionStorage.setItem('token', <string>resp.headers.get('Authorization'));
          this.router.navigate(['/home']);
        }
      });
}

  register (user:User) : void {
    this.http.post(this.backBaseHost+"user/register", user,{ observe: 'response'})
      .subscribe(resp => {
        if(resp.status === 201){
          this.login(user);
        }
      });
  }

}
