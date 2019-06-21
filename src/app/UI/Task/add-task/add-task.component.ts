import { Component, OnInit } from '@angular/core';
import {PMServiceService} from "src/app/Service/pmservice.service";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {Task} from'src/app/Model/Task';
import {ParentTask} from 'src/app/Model/ParentTask';
import {Project} from 'src/app/Model/Project';
import {User} from 'src/app/Model/User';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  taskNames: string[]=[];
  task : Task; 
  parentTask : ParentTask[]=[];
  userList : User[]=[];
  projectList : Project[]=[];

  constructor(private PMService:PMServiceService) { }

  ngOnInit() {
    this.taskNames=["Task1","Task2","Task3"];
    this.task={TaskId:0,TaskName:"",ParentTaskId:1,ParentTaskName:"TaskParent",ProjectId:1,ProjectName:"TaskProject",TaskStartDate:null,TaskEndDate:null,TaskPriority:0,TaskStatus:true,UserId:1,UserName:"TaskUser"};
    //this.parentTask={}
    this.getParentTask();
    this.getProjects();
    this.getUsers();
  }
  getProjects(){
    this.projectList=[{ProjectId:1,ProjectName:'Project1',TasksCount:1,Completed:1,ProjectStartDate:'12June',ProjectEndDate:null,ProjectPriority:1,ProjectManagerId:123,ProjectManagerFullName:'ManagerUser'},{ProjectId:2,ProjectName:'Project2',TasksCount:2,Completed:2,ProjectStartDate:null,ProjectEndDate:null,ProjectPriority:2,ProjectManagerId:111,ProjectManagerFullName:'ManagerUser1'}]
    debugger;
    this.PMService.GetTableProjects().subscribe(data=>
      {
        this.projectList = data;
        console.log(data);
      });
  }
  getParentTask(){
    this.parentTask=[{ParentTaskID:1,ParentTaskName:'TaskName1'},{ParentTaskID:2,ParentTaskName:'TaskName2'}];
    debugger;
    this.PMService.GetTableParentTasks().subscribe(data=>
      {
        this.parentTask = data;
        console.log(data);
      }); 
  }
  getUsers(){
    this.userList=[{EmpFirstName:'FN1',EmpLastName:'LN1',EmpID:1},{EmpFirstName:'FN2',EmpLastName:'LN2',EmpID:2}];  
    debugger;
    this.PMService.GetTableUsers().subscribe(data=>
      {
        this.userList = data;
        console.log(data);
      }); 
  }
  
  submitClick()
  {
    debugger;
    alert(JSON.stringify(this.task));// TODO update call
    this.PMService.PostTaskTable(this.task).subscribe(()=>{});    
  }

  resetClick()
  {    
    this.task={TaskId:0,TaskName:"",ParentTaskId:1,ParentTaskName:"TaskParent",ProjectId:1,ProjectName:"TaskProject",TaskStartDate:null,TaskEndDate:null,TaskPriority:0,TaskStatus:true,UserId:1,UserName:"TaskUser"};
  }
}
