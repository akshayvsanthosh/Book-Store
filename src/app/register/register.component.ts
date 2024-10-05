import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = ""
  email: string = ""
  password: string = ""

  constructor(private toastr: ToastrService, private api: ApiService, private router: Router) { }
  

  register() {
    const user = { userName: this.username, email: this.email, password: this.password }
    this.api.registerAPI(user).subscribe({
      next: (result: any) => {
        console.log(result);
        this.toastr.success("Registered successfully, Please login!")
        this.router.navigateByUrl("login")
      },
      error: (reason: any) => {
        console.log(reason);
        this.toastr.warning(reason.error)
      }
    })
  }

}
