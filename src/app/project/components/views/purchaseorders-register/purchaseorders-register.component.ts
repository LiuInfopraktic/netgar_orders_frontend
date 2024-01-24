import { Component, OnInit} from '@angular/core';
import { H_AContacts } from 'src/app/project/services/holdedAPI/H_AContacts';

@Component({
  selector: 'app-purchaseorders-register',
  templateUrl: './purchaseorders-register.component.html',
  styleUrls: ['./purchaseorders-register.component.css']
})
export class PurchaseordersRegisterComponent implements OnInit {
  proveedor:string = '';
  contacts:any = ['prov1', 'prov2', 'prov3', 'prov4'];
  albarans_template:any = [
    {prov:'prov1', art:10, date:'23/01/2023'},
    {prov:'prov1', art:8, date:'24/01/2023'},
    {prov:'prov2', art:7, date:'20/01/2023'},
    {prov:'prov3', art:10, date:'24/01/2023'},
    {prov:'prov3', art:10, date:'24/01/2023'},
    {prov:'prov3', art:10, date:'24/01/2023'},
    {prov:'prov3', art:10, date:'24/01/2023'},
    {prov:'prov3', art:10, date:'24/01/2023'},
    {prov:'prov3', art:10, date:'24/01/2023'},
    {prov:'prov3', art:10, date:'24/01/2023'},
    {prov:'prov3', art:10, date:'24/01/2023'},
    {prov:'prov3', art:10, date:'24/01/2023'},
    {prov:'prov3', art:10, date:'24/01/2023'},
    {prov:'prov3', art:10, date:'24/01/2023'},
    {prov:'prov3', art:10, date:'24/01/2023'},
    {prov:'prov3', art:10, date:'24/01/2023'},
    {prov:'prov1', art:11, date:'23/01/2023'}
  ]
  albarans = this.albarans_template
  constructor(private H_AContacts:H_AContacts) { }

  ngOnInit(): void {
    this.getContacts()
  }
  async getContacts(){let abc = await this.H_AContacts.getContacts().toPromise();console.log(abc)}

  filterProv(){
    this.albarans = this.albarans_template
    this.proveedor != '' ? this.albarans = this.albarans.filter((a:any) => a.prov == this.proveedor) : '';
  }

}
