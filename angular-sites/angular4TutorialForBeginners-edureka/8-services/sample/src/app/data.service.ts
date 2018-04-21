import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  items: string[] = ['Butter','Bread','Salt'];

  getItems(): string[]{
    return this.items;   
  }

  addItem(newItem){
    this.items.push(newItem);
    return this.items;
  }

  constructor() { }

}
