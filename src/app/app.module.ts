import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';

import { AlertService } from './shared/alert/alert.service';
import { UsersService } from './shared/users.service';
import { CoursesService } from './shared/courses.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './shared/alert/alert.component';
import { ProfileComponent } from './profile/profile.component';
import { CouresListComponent } from './coures-list/coures-list.component';
import { SearchComponent } from './search/search.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateformComponent } from './updateform/updateform.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    AlertComponent,
    ProfileComponent,
    CouresListComponent,
    SearchComponent,
    AddCourseComponent,
    UpdateformComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    routing

  ],
  providers: [
    AlertService,
    UsersService,
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
