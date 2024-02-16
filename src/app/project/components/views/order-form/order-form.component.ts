import { Component, OnInit } from '@angular/core';
import { AOrders } from 'src/app/project/services/API/orders/AOrders';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  order!:any;
  empresa:boolean = false;
  constructor(private AOrder:AOrders) { }

  ngOnInit(): void {
  }
  checkboxSetActive(input:HTMLDivElement){
    input.classList.contains('active') ? input.classList.remove('active') : input.classList.add('active')
  }
  visitType(input_box:HTMLDivElement, box:HTMLDivElement, empresa:HTMLDivElement, type:string){
    if(type == 'empresa') {
      this.empresa = true;
      input_box.classList.remove('hide')
    }
    else input_box.classList.add('hide');
    box.querySelector('.box.active')?.classList.remove('active')
    empresa.classList.add('active')
  }
  // Form submit butn
  submitForm(btn:HTMLButtonElement, dni:string, tel:string, name:string, emp:string, type:string) {
    this.empresa ? '' : emp = 'Particular';
    let valid = false;
    let regex_tel = /^\d{9,12}$/
    if (tel.match(regex_tel)) {
      if(dni){
        let first_char = dni.substring(0,1);
        
        if(!isNaN(parseInt(first_char.charAt(0), 10))) this.checkDNI(dni) ? valid = true : ''
        else this.checkNIE(dni) ? valid = true : ''
      }
      if (valid){
        btn.classList.add('loading');
        this.order = { dni, tel, name, emp, type }
        let popup = document.querySelector('.popup')
        popup?.classList.remove('hide');
      } else {
        document.querySelector('.form .input-box.dni')?.classList.add('error')
        let err = document.querySelector('label.error');
        err?.classList.add('show');
        if(err) err.textContent= "El DNI/NIE no es correcte."
      }
    } else {
      document.querySelector('.form .input-box.tel')?.classList.add('error')
      let err = document.querySelector('label.error');
      err?.classList.add('show');
      if(err) err.textContent= "El Telefon no es vàlid"
    }
  }

  // Terms and conditions agreement option
  async acceptForm(btn2:HTMLButtonElement ,input:HTMLDivElement){
    let btn = document.querySelector('.form button.loading')
    btn2.classList.add('loading')
    let err = document.querySelector('label.error');
    err?.classList.add('show');
    if(input.classList.contains('active')){
      try {
        let response = await this.addOrder();
        this.emptyForm();
        if(!response.message) {if(err) err.textContent= "No s'ha pogut guardar la comanda."}
        else err ? this.successMsg(err) : ''

        let popup = document.querySelector('.popup')
        popup?.classList.add('hide')
        btn?.classList.remove('loading')
        
      } catch(e){
        if(err) err.textContent= "No s'ha pogut guardar la comanda."
        let popup = document.querySelector('.popup')
        popup?.classList.add('hide')
        btn?.classList.remove('loading')
      }
    } else{
      if(err) err.textContent= "No s'han acceptat les condicions.";
          
      let popup = document.querySelector('.popup')
      popup?.classList.add('hide')
      let btn = document.querySelector('button.loading')
      btn?.classList.remove('loading')
    }
    let checkbox:HTMLInputElement|null = document.querySelector("input[type='checkbox']");
    if(checkbox) checkbox.checked = false
    btn2.classList.remove('loading')
    btn?.classList.remove('loading')
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
    input_box.classList.contains('error') ? input_box.classList.remove('error'): ''
  }
  blur(input_box:HTMLDivElement, input_value:string){
    if(input_value == '') {
      input_box.classList.remove('focus')
    }
  }

  checkNIE(nie:string){
    nie = nie.toLocaleUpperCase();
    const nieRegex = /^[XYZ]\d{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
    return nieRegex.test(nie);
  }
  checkDNI(dni:string){
    const dniRegex = /^\d{8}[A-HJ-NP-TV-Z]$/;
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    dni = dni.toLocaleUpperCase();
    if (!dniRegex.test(dni)) {
      return false;
    }
    const letraControl = letras[parseInt(dni.substr(0, 8), 10) % 23];
    return letraControl === dni.charAt(8);
  }
}
