import { Component, OnInit } from '@angular/core';
import{Project} from 'src/app/Model/Project'
import {User} from'src/app/Model/User';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit 
{
  projectList : Project[];
  project: Project;
  userList:User[];
  user:User;
  displayDate:boolean;

  constructor() { }

  ngOnInit() {
    this.displayDate=false;
    this.project={ProjectId:1,ProjectName:'PN',ProjectStartDate:"20/5/2018",ProjectEndDate:"20/6/2019",ProjectPriority:5,ProjectManagerId:3,ProjectManagerFullName:"FN",Completed:0,TasksCount:1};
    this.projectList=[
      {ProjectId:1,ProjectName:'PN1',ProjectStartDate:'',ProjectEndDate:"",ProjectPriority:1,ProjectManagerId:5,ProjectManagerFullName:"FN5",Completed:0,TasksCount:1},
      {ProjectId:2,ProjectName:'PN2',ProjectStartDate:'',ProjectEndDate:"",ProjectPriority:2,ProjectManagerId:5,ProjectManagerFullName:"FN5",Completed:1,TasksCount:2},
      {ProjectId:3,ProjectName:'PN3',ProjectStartDate:'',ProjectEndDate:"",ProjectPriority:3,ProjectManagerId:5,ProjectManagerFullName:"FN5",Completed:0,TasksCount:3}
    ];
    this.userList=[
      {EmpFirstName:'FN1',EmpLastName:'LN1',EmpID:1},
      {EmpFirstName:'FN2',EmpLastName:'LN2',EmpID:2},
      {EmpFirstName:'FN3',EmpLastName:'LN3',EmpID:3}
    ];
  }
  toggleDate()
  {
alert(this.displayDate);
  }
}
