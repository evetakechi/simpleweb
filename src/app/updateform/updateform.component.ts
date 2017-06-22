import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { AlertService } from '../shared/alert/alert.service';
import { User } from '../shared/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss']
})
export class UpdateformComponent implements OnInit {
  //currentUser: User;
  model:User;
  result:any;
  constructor(private location:Location,
              private usersService:UsersService,
              private alertService:AlertService) { }

  ngOnInit() {
      this.model = JSON.parse(localStorage.getItem('currentUser'));

  }

  update(){
    console.log(this.model);
    this.usersService.updateUser(this.model)
        .subscribe(
            response => {
              this.result = response;
              console.log(this.result);
              if(this.result.resultCode == 1){
              localStorage.setItem('currentUser', JSON.stringify(this.model));
              this.alertService.success('Update Profile Successful',true);
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
