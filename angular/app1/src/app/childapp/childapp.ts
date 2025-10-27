import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-childapp',
  standalone: false,
  templateUrl: './childapp.html',
  styleUrl: './childapp.css'
})
export class Childapp {

  @Input()
  title!:string;
  bclick!:number;
  
}
