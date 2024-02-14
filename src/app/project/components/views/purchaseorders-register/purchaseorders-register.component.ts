import { Component, OnInit} from '@angular/core';
import { AContacts } from 'src/app/project/services/API/admin/AContacts';
import { ADocuments } from 'src/app/project/services/API/admin/ADocuments';

@Component({
  selector: 'app-purchaseorders-register',
  templateUrl: './purchaseorders-register.component.html',
  styleUrls: ['./purchaseorders-register.component.css']
})
export class PurchaseordersRegisterComponent implements OnInit {
  proveedor:string = '';
  contacts:any = [];
  albarans_template:any = [];
  albarans = this.albarans_template;
  selected_alb:any = {}
  constructor(private AContacts:AContacts, private ADocuments:ADocuments) { }

  ngOnInit(): void {
    this.getContacts()
    this.getDocuments()
  }

  async getContacts(){let response = await this.AContacts.getContacts().toPromise(); this.contacts = response.data;}
  async getDocuments(){
    let response = await this.ADocuments.getDocuments().toPromise();
    this.albarans_template = response.data;
    this.albarans = response.data;
  }

  filterProv(){
    this.albarans = this.albarans_template
    this.proveedor != '' ? this.albarans = this.albarans.filter((a:any) => a.contact_name == this.proveedor) : '';
  }

  selectAlb(alb:any, alb_section:HTMLDivElement){
    this.selected_alb = alb;
    alb_section.classList.remove('hide')
  }


}
