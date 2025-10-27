import { Component, Input, signal } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  title = signal('app1');
  OWB="Sam"
  sss='sss'
  TWB=""
  TWB1=""
  TWB2=""
  TWB3=""
  formgroup!:FormGroup;

  constructor(private builder:FormBuilder){
    this.formgroup=builder.group({
      Name:["",Validators.maxLength(3)],
      Email:[""],
      username:[""],
    }) 
  }
  callForm(){
    console.log(this.formgroup)
  }
  count=0;
  Count(): void{
    this.count++
    
  }
  Count1(): void{
    this.count--
  }
  getValue(e:any){
    this.childM=e;
  }
  childM=""
}

