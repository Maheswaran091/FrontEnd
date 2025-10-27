import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  val=""
 @Input()
  bclick!:number;

 @Output()
  toparent=new EventEmitter<any>();

  callParent(){
    this.toparent.emit(this.val)
  }
}
