import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { InventoryService } from "../service/inventory.service";
import { Inventory } from "./../model/inventory";
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  inventorylist: Observable<Inventory[]>;

  constructor(private inventoryService: InventoryService){}
  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.inventorylist = this.inventoryService.getInventoryList();
  }

}
