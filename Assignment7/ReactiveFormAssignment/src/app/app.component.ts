import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 status=['Stable','Critical','Finished'];
 defaultStatus=this.status[1];
  projectForm:FormGroup;

  ngOnInit(): void {
    this.projectForm=new FormGroup({
      'projectname':new FormControl(null,[Validators.required],this.forbiddenNameAsync.bind(this)),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'status': new FormControl(this.defaultStatus)
    });

    
  }
  onSubmit(){
    console.log(this.projectForm.value);
  }



  forbiddenNameAsync(control:FormControl):Promise<any> | Observable<any>{
    const promise=new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value==='Test'){
          resolve({'nameIsForbidden':true});
        }
        else{
          resolve(null);
        }
      },1000);
    });
    return promise;
  }
}
