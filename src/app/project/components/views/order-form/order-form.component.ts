import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  focus(input_box:HTMLDivElement){
    input_box.classList.add('focus')
  }
  blur(input_box:HTMLDivElement, input_value:string){
    if(input_value == '') {
      input_box.classList.remove('focus')
    }
  }
}
