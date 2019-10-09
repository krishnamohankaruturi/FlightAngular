import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from '../user.service';
import {ToasterService} from 'angular5-toaster';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user: any={};
  constructor(private userService: UserService,private router:Router) { }

  ngOnInit() {
  
  }
 saveUser(user:any,userForm:any)
  {
    user.enabled=true;
    this.userService.saveUser(user).subscribe((response)=> {
    if(response){
 //   this.router.navigate(['/user']);
//this.toasterService.pop('sucess',"registered successfully");
console.log(response);
userForm.reset();
   
  }
})
  } 
}
