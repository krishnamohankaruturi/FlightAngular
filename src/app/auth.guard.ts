import { CanActivate, Router,ActivatedRouteSnapshot,RouterStateSnapshot } from "@angular/router";
import {Observable} from 'rxjs/Observable';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate
{
    constructor(private router : Router)
    {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       
        if(localStorage.getItem('currentUser'))
        {
            return true;
        }
this.router.navigate(['/login']);
return false;

    }
    
}

