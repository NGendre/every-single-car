import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/model/brand';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {
  b1 = new Brand(1,'Peugeot');
  b2 = new Brand(2,'Ferrari');
  brandList=[
    {
      
    },
    {
      
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
