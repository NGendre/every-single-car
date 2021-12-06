import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  carId : Number;

  constructor(private route: ActivatedRoute) {
    this.carId=Number(this.route.snapshot.params['id']);
   }

  ngOnInit(): void {
  }

}
