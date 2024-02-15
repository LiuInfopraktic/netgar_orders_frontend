import { Component, OnInit } from '@angular/core';
import { AOrders } from 'src/app/project/services/API/orders/AOrders';

@Component({
  selector: 'app-visits-list',
  templateUrl: './visits-list.component.html',
  styleUrls: ['./visits-list.component.css']
})
export class VisitsListComponent implements OnInit {
  visits_all = []
  visits:any = this.visits_all;
  constructor(private orders:AOrders) {}

  ngOnInit(): void {
    this.getOrders();
  }
  async getOrders(){
    this.visits_all = await this.orders.getOrders().toPromise()
    this.visits = this.visits_all
  }
  selectRow(row:HTMLLIElement, visits_list:HTMLUListElement){
    if(row.classList.contains('active')) row.classList.remove('active')
    else {
      visits_list.querySelector('.active')?.classList.remove('active');
      row.classList.add('active')
    }
  }

  filter(date:string){
    if(date){
      let date_arr:any = date.split('-')
      date = `${date_arr[2]}/${date_arr[1]}/${date_arr[0]}`
      this.visits = this.visits_all.filter((v:any) => v.data == date);
    }
  }
  rmFilter(){this.visits = this.visits_all}

}
