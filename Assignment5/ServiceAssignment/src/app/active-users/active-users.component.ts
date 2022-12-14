import { Component } from '@angular/core';
import { UserService } from '../users.service';
@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
 users:string[]=this.userService.activeUsers;


  constructor(private userService:UserService){}
  onSetToInactive(id:number){
    this.userService.setToInactive(id);
  }

}
