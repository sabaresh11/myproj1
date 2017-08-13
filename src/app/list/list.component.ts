import { Component, OnInit } from '@angular/core';
import { Details } from './list.detail';
@Component({
  selector: 'app-list',
  moduleId: module.id,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  studentFilter : string;
  students : Details[]= [
    {
    "name" : "sabaresh",
    "rollnum" : 1406029,
     "dob" : "September 11, 1996" ,
    "phNumber" : 8883862092,
    "cgpa" : 7.44,
    "mail" : "sabaresh.1406029@srec.ac.in"

  },
{
  "name" : "srinivasan",
    "rollnum" : 1406037,
    "dob" : "July 07, 1997" ,
    "phNumber" : 8248946450,
    "cgpa" : 8.10,
    "mail" : "sriniasan.1406037@srec.ac.in"

}];
  constructor() { }

  ngOnInit() {
    console.log('On OnInit');
  }

}
