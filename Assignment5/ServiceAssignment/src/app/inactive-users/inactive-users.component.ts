import { Component} from '@angular/core';
import {UserService } from '../users.service'

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent  {
  users:string[]=this.userService.inactiveUsers;
  constructor(private userService:UserService) { }

  onSetToActive(id:number){
    this.userService.setToActive(id);
  }

}
