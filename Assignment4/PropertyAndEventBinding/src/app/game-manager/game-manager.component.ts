import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-manager',
  templateUrl: './game-manager.component.html',
  styleUrls: ['./game-manager.component.css']
})
export class GameManagerComponent implements OnInit {
  container=[];

  constructor() { }

  ngOnInit(): void {
  }

  manage(num:number){
    this.container.push(num);
  }

}
