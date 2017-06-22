import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../shared/course';

@Component({
  selector: 'app-coures-list',
  templateUrl: './coures-list.component.html',
  styleUrls: ['./coures-list.component.scss']
})
export class CouresListComponent implements OnInit {
 @Input() course:Course;
  constructor() { }

  ngOnInit() {

  //  console.log(this.curUsername);
  }



}
