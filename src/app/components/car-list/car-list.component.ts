import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  ferrari = {
    id: 1,
    brand: 'Ferrari',
    name: 'SF2004'
  }
  peugeot = {
    id: 2,
    brand: 'Peugeot',
    name: '205 T16'
  }
  ford = {
    id: 3,
    brand: 'Ford',
    name: 'GT40'
  }
  carList = [
    this.ferrari,this.peugeot,this.ford
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
