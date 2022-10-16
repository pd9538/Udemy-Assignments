import { Component, OnInit,EventEmitter,OnDestroy,Output,Input } from '@angular/core';
import { TimeInterval } from 'rxjs';
@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter=0;
  interval:any;
  seconds=1*1000;

  @Input() gameComponents;
  @Output() gameStartEmitter=new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
   
  onGameStart(){
      this.interval=setInterval(()=>{
        this.gameStartEmitter.emit(this.counter++);
      },this.seconds);    
    }
  
    onGameStop(){
      clearInterval(this.interval);
    }

    ngOnDestroy(){
      this.onGameStop();
    }
}
