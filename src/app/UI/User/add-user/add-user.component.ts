import { Component, OnInit } from '@angular/core';
import {User} from'src/app/Model/User';
import {PMServiceService} from "src/app/Service/pmservice.service";
import { debug } from 'util';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userList : User[]=[];
  filteredUsers : User[]=[];
  user: User;
  addUpdate:string;

  constructor(private PMService:PMServiceService) {}

  ngOnInit() {
    this.addUpdate='Add';
    this.user={EmpFirstName:'FN',EmpLastName:'LN',EmpID:1};
    this.userList=[
      {EmpFirstName:'FN1',EmpLastName:'LN1',EmpID:1},
      {EmpFirstName:'FN2',EmpLastName:'LN2',EmpID:2},
      {EmpFirstName:'FN3',EmpLastName:'LN3',EmpID:3}];      
      this.getUsers();
      // setTimeout(()=>{ this.getUsers()},300);      
      // this.filteredUsers=this.userList;
  }
  getUsers() {
    debugger;
    this.PMService.GetTableUsers().subscribe(data=>
      {
        this.userList = data;
        console.log(data);
      });    
  }
  submitClick(addOrUpdate:string)
  {
    debugger;
    if(addOrUpdate=='Add')
    this.PMService.PostUserTable(this.user).subscribe();
    else
    this.PMService.updateUser(this.user).subscribe(()=>{});
  }
  resetClick()
  {   
    this.addUpdate='Add'; 
    this.user={EmpFirstName:'FN',EmpLastName:'LN',EmpID:1};
  }
  sortRecords(val: string)
  {
    alert("Sorted");
  }
  editUser(val:User)
  {
    debugger;
    this.addUpdate='Update';    
    this.user=val;
    console.log(this.user);
  }
  deleteUser(val:User)
  {   
     debugger;
     this.PMService.deleteUser(val).subscribe(()=>{});   
  }
  // filterUser()
  // {
  //   debugger;
  //   alert ("Filtered");
  // }
  keyChange(event:any)
 {
   debugger;    
   this.filteredUsers=this.userList.filter(t=>{
     return t.EmpFirstName.toLowerCase().includes(event.target.value);
    });
   if(event.target.value==""){
    this.filteredUsers=null;
   }
 }
}
