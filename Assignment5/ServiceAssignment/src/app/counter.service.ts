import {Injectable} from '@angular/core';

@Injectable()
export class CounterService{
    inactiveCount:number=0;
    activeCount:number=0;

    constructor(){}

    userCountActiveToInactive(){
        this.inactiveCount++;
        console.log('Active to Inactive changes: '+ this.inactiveCount);
    }

    userCountInactiveToActive(){
        this.activeCount++;
        console.log('Inactive to Active changes: '+ this.activeCount);
    }
}