import { Injectable } from '@angular/core';
import { Details } from './list.detail';

@Injectable()
export class ListService { 
    getDetails () : Details[] {
        return [
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

}] ; 
    }
}