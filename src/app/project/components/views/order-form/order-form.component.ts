import { Component, OnInit } from '@angular/core';
import { AOrders } from 'src/app/project/services/API/orders/AOrders';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  order!:any;
  constructor(private AOrder:AOrders) { }

  ngOnInit(): void {
  }


  submitForm(btn:HTMLButtonElement, dni:string, tel:string, name:string, emp:string, type:string) {
    btn.classList.add('loading');
    this.order = { dni, tel, name, emp, type }
    let popup = document.querySelector('.popup')
    popup?.classList.remove('hide')
  }
  async acceptForm(input:HTMLInputElement){
    let err = document.querySelector('label.error');
    if(input.checked){
      try {
        let response = await this.addOrder();
        err?.classList.add('show')
        this.emptyForm();
        if(!response.message) {
          if(err) err.textContent= "No s'ha pogut guardar la comanda."
        } else {
          err ? this.successMsg(err) : ''
        }
          let popup = document.querySelector('.popup')
          popup?.classList.add('hide')
          let btn = document.querySelector('button.loading')
          btn?.classList.remove('loading')
        
      } catch(e){
        if(err) err.textContent= "No s'ha pogut guardar la comanda."
        let popup = document.querySelector('.popup')
        popup?.classList.add('hide')
        let btn = document.querySelector('button.loading')
        btn?.classList.remove('loading')
      }
    }else{
      if(err) err.textContent= "No s'han acceptat les condicions.";
          
      let popup = document.querySelector('.popup')
      popup?.classList.add('hide')
      let btn = document.querySelector('button.loading')
      btn?.classList.remove('loading')
    }
  }
  async successMsg(label:Element){
    label.classList.add('success')
    label.textContent= "Comanda realitzada"
    setTimeout(()=> {
      label.classList.remove('success')
      label.classList.remove('show')
    },2950)
  }
  emptyForm(){
    document.querySelectorAll(".form input").forEach((e:any) => {e.value = ''; e.parentNode.classList.remove('focus')})
  }

  async addOrder():Promise<any>{
    let response = await this.AOrder.putOrder(this.order).toPromise();
    this.order = {}
    return response;
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
