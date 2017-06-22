import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateformComponent } from './updateform/updateform.component';
const appRouters: Routes = [
  { path:'', component: HomeComponent},
  { path:'register', component: RegisterComponent},
  { path:'profile', component: ProfileComponent},
  { path:'addcourse/:userName', component:AddCourseComponent},
  { path:'updateform', component:UpdateformComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);
