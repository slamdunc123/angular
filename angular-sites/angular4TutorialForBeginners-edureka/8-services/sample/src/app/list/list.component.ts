import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [DataService]
})
export class ListComponent implements OnInit {

  itemsReceived: string [];

  getItemsFromServiceClass(){
    this.itemsReceived = this.dataService.getItems();
    console.log('data service works!');
  }

  addNewItem(form: any){
    this.dataService.addItem(form.value.itemName);
    console.log(form.value.itemName);
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
