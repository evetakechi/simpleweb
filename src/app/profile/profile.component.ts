import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { User } from '../shared/user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user : any;
  currentUser: User
//  searchType = {type:,}
  constructor(private userService:UsersService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    console.log(this.currentUser);

  }


}
