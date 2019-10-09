import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
public user:any={};
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
  }
login(user:any)
{
  this.userService.loginUser(user).subscribe((response)=> {
  if(response){
    {
      if(response.token)
      {
        localStorage.setItem('currentUser',JSON.stringify(response));
      if(response.user.role==='ADMIN')
      {
        this.router.navigate(['/admindashboard']);
      }
      else{
        this.router.navigate(['/userdashboard']);
      }
      }
    }
    
}
})
}
}
