import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CoursesService } from '../shared/courses.service';
import { AlertService} from '../shared/alert/alert.service';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  model:any ={};
  username;
  param:any ={};
  periods = ['1 day', '3 days',
            '5 days', '7 days'];
  typeCourse = ['Fighting','Cooking','Adventure','Survey'];
  result:any;
  constructor(private route : ActivatedRoute,private location : Location,
  private courseService: CoursesService, private alertService:AlertService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.username = params['userName']; // (+) converts string 'id' to a number
      console.log(this.username);

    });

  }
  addCourse(){
  //  console.log(this.username);

    this.model.userName = this.username;
    this.model.currentStudent = 0;
    this.model.courseStatus = 'open';

    console.log(this.model);
    //console.log(this.model);
    this.courseService.addCourse(this.model)
        .subscribe(
            response => {
              this.result = response;
              console.log(this.result);
              if(this.result.resultCode == 1){
              this.alertService.success('Add New Course successful',true);
              this.goBack();

              }else{
                console.log('not found');
                this.alertService.error(this.result.message);
              }


            },
            error => {
                this.alertService.error(error);
              //  this.loading = false;
            });

  }

  goBack(): void{
    this.location.back();

  }
}
