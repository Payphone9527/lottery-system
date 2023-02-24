import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items: string[] = [];
  newItemText: string = '';
  newManyItemText: string = '';
  result: string = '';

  addItem() {
    if (this.newItemText !== '') {
      this.items.push(this.newItemText);
      this.newItemText = '';
    }
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  lottery(){
    this.result = this.items[Math.floor(Math.random() * (this.items.length))];
  }

}
