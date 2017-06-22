import { Component, OnInit , Input} from '@angular/core';
import { User } from '../shared/user';
import { Course } from '../shared/course';
import { CoursesService } from '../shared/courses.service';
import { AlertService } from '../shared/alert/alert.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() curUser:User;
  //@Input() curUsername;
  result: any;
  notfound:boolean = false;
  model:any ={type:'name'};
  periods = ['1 day', '3 days',
            '5 days', '7 days'];
//  types = ['Name','Time'];
cousres: Course[] = [];


  constructor(private coursesService:CoursesService , private alertService:AlertService) { }

  ngOnInit() {
    console.log(this.curUser);
    console.log(this.result);
    this.model.role = this.curUser.role;
    this.model.userName = this.curUser.userName;
  }

  search(){
    console.log(this.model);

    if(this.model.type == 'time'){
      console.log(this.model);
      this.coursesService.searchtime(this.model)
      .subscribe(response => {this.result = response;
                  console.log(this.result)
                  if(this.result.resultCode == 1){
                    this.cousres = this.result.courses;
                    console.log(this.cousres);
                  }else{
                    this.cousres = [];
                    console.log(this.cousres)
                    this.notfound = true;
                    //this.alertService.error(this.result.message);
                  }
                },
                error => {
                    this.alertService.error(error);
                  //  this.loading = false;
                });
    }else {
        console.log(this.model);
        this.coursesService.searchname(this.model).subscribe(response => {this.result = response;

                    if(this.result.resultCode == 1){
                      this.cousres = this.result.courses;
                        console.log(this.cousres);
                    }else{
                      this.cousres = [];
                      console.log(this.cousres)
                      this.notfound = true;
                      //this.alertService.error(this.result.message);
                    }
                  },
                  error => {
                      this.alertService.error(error);
                    //  this.loading = false;
                  });

    }

  }

}
