import { Component } from '@angular/core';
import{ ListService } from './list/list.services';
@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ ListService ]
})
export class AppComponent {
  title = 'app';
  constructor(private li:ListService){}
}
