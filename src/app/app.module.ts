import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProjectComponent } from './UI/Project/add-project/add-project.component';
import { AddTaskComponent } from './UI/Task/add-task/add-task.component';
import { ViewTaskComponent } from './UI/Task/view-task/view-task.component';
import { AddUserComponent } from './UI/User/add-user/add-user.component';
import { PMServiceService } from 'src/app/Service/pmservice.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AddProjectComponent,
    AddTaskComponent,
    ViewTaskComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'AddTask', component:AddTaskComponent},
      {path:'ViewTask', component:ViewTaskComponent}, 
      {path:'AddProject', component:AddProjectComponent},
      {path:'AddUser', component:AddUserComponent}, 
      ]
    )
  ],
  providers: [PMServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
