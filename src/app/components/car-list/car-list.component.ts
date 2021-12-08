import { Component, OnInit } from '@angular/core';
import { cars } from "src/app/data/cars";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  carList = cars
  

  constructor() { 
  }

  ngOnInit(): void {
  }

}
