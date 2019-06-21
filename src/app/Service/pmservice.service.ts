import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {User} from'src/app/Model/User';
import { Task } from 'src/app/Model/Task';
import{Http, Response,Headers,RequestOptions,RequestMethod} from '@angular/http';
//import { HttpResponse } from 'selenium-webdriver/http';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { Project } from 'src/app/Model/Project';
import { ParentTask } from 'src/app/Model/ParentTask';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json', 'withCredential':'true', 'Access-Control-Allow-Origin': '*'})
}

@Injectable({
  providedIn: 'root'
})
export class PMServiceService {
  pmServiceUrl :string="http://localhost:57165/api/";

  constructor(private http:HttpClient) { }
// Calls for User
  GetTableUsers():Observable<User[]>{
    debugger;
    return this.http.get<User[]>(this.pmServiceUrl+'User');
  }
  GetTableUser(Id:number):Observable<User>{
    debugger;
    const getUrl = this.pmServiceUrl+'User/'+Id;    
    return this.http.get<User>(getUrl);
  }
  PostUserTable(newUser:User):Observable<User> {
    debugger;
    var newUserData = JSON.stringify(newUser);
    const addUrl = this.pmServiceUrl+'User';
    return this.http.post<User>(addUrl, newUserData,httpOptions);
  }
  updateUser(modifyUser:User):Observable<any>{
    debugger;
    var modifyUserData = JSON.stringify(modifyUser);
    const updateUrl = this.pmServiceUrl+'User/'+modifyUser.EmpID;
    return this.http.put(updateUrl,modifyUserData,httpOptions);
  }
  deleteUser(deleteUser:User):Observable<any>{
    debugger;
    const deleteUrl = this.pmServiceUrl+'User/'+deleteUser.EmpID;
    return this.http.delete(deleteUrl,httpOptions);    
  }
//Calls for Task
  GetTableTasks():Observable<Task[]>{
    debugger;
    return this.http.get<Task[]>(this.pmServiceUrl+'Task');
  }

  GetTableTask(Id:number):Observable<Task>{
    debugger;
    const getUrl = this.pmServiceUrl+'/Task/'+Id;    
    return this.http.get<Task>(getUrl);
  }
  PostTaskTable(newTask:Task):Observable<Task> {
    debugger;
    var newTaskData = JSON.stringify(newTask);
    const addUrl = this.pmServiceUrl+'Task';
    return this.http.post<Task>(addUrl, newTaskData, httpOptions);
  }
  updateTask(modifyTask:Task):Observable<any>{
    debugger;
    var modifyTaskData = JSON.stringify(modifyTask);
    const updateUrl = this.pmServiceUrl+'Task/'+modifyTask.TaskId;
    return this.http.put(updateUrl,modifyTaskData,httpOptions);
  }
  deleteTask(deleteTask:Task):Observable<any>{
    debugger;
    const deleteUrl = this.pmServiceUrl+'Task/'+deleteTask.TaskId;
    return this.http.post(deleteUrl,deleteTask.TaskId,httpOptions);    
  }
  //Calls for Project
  GetTableProjects():Observable<Project[]>{
    debugger;
    return this.http.get<Project[]>(this.pmServiceUrl+'Project');
  }

  GetTableProject(Id:number):Observable<Project>{
    debugger;
    const getUrl = this.pmServiceUrl+'Project/'+Id;    
    return this.http.get<Project>(getUrl);
  }
 //calls for parentTask 
 GetTableParentTasks():Observable<ParentTask[]>{
  debugger;
  return this.http.get<ParentTask[]>(this.pmServiceUrl+'ParentTask');
}
};
