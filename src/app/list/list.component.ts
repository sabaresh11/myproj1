import { Component, OnInit } from '@angular/core';
import { Details } from './list.detail';
import { ListService } from './list.services';
@Component({
  selector: 'app-list',
  moduleId: module.id,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  studentFilter : string;
  students : Details[]
  constructor( private _listServices : ListService ) { }

  ngOnInit() {
    this.students = this._listServices.getDetails();
  }

}
