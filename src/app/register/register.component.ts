import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../shared/users.service';
import { AlertService } from '../shared/alert/alert.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input() users;

model: any = {};
result: any;
  constructor(private router:Router,
  private usersService: UsersService,
  private alertService: AlertService) { }

  ngOnInit() {
    this.model = {
      role:"student",
      gender:"Male"
    }

  //  console.log(this.users);
  }

  register() {
    console.log(this.model);
    this.usersService.registerUser(this.model)
        .subscribe(
            response => {
              this.result = response;
              console.log(this.result);
              if(this.result.resultCode == 1){
              this.alertService.success('Registration successful',true);
                this.router.navigate(['']);

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


  gotoHome(){
    this.router.navigateByUrl('');
  }

}
