import { Component, OnInit ,Input} from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { UsersService } from '../shared/users.service';
import { User } from '../shared/user';
import { AlertService } from '../shared/alert/alert.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

    model: any = {};
    users: any ={};

    //data: any ;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UsersService,
              private alertService: AlertService
      ) { }

  ngOnInit() {
    this.userService.logout();
  }

  login() {
        console.log(this.model);
        this.userService.checkLogin({userName:this.model.userName, password:this.model.password})
            .subscribe(
                response => {
                  this.users = response;
                  console.log(this.users);
                  if(this.users.resultCode == 1){
                    localStorage.setItem('currentUser', JSON.stringify(this.users.user));
                    this.router.navigate(['/profile']);

                  }else{
                      console.log('not found');
                    this.alertService.error(this.users.message);
                  }


                },
                error => {
                    this.alertService.error(error);
                  //  this.loading = false;
                });
    }

  gotoRegis(){
    this.router.navigateByUrl('/register');
  }

}
