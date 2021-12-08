import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-car-row',
  templateUrl: './car-row.component.html',
  styleUrls: ['./car-row.component.scss']
})
export class CarRowComponent implements OnInit {
  @Input() carId: number;
  @Input() carBrand: string;
  @Input() carName: string;
  @Input() carDescription: string;
  @Input() carEnginePlacement: number;
  @Input() carDriveTrain: number;

  constructor() { }

  ngOnInit(): void {
  }

}
