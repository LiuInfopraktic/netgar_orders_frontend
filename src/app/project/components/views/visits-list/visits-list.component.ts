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

  downloadCSV(){
    this.downloadFile(this.visits)
  }
  downloadFile(data:any, filename='data') {
    let csvData = this.ConvertToCSV(data, ['dni','name', 'company', 'phone_number', 'type', 'data']);
    console.log(csvData)
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
        dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename + ".csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
}

ConvertToCSV(objArray:any, headerList:any) {
     let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
     let str = '';
     let row = 'S.No,';

     for (let index in headerList) {
         row += headerList[index] + ',';
     }
     row = row.slice(0, -1);
     str += row + '\r\n';
     for (let i = 0; i < array.length; i++) {
         let line = (i+1)+'';
         for (let index in headerList) {
            let head = headerList[index];

             line += ',' + array[i][head];
         }
         str += line + '\r\n';
     }
     return str;
 }

}
