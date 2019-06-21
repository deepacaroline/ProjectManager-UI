export class Task {
    TaskId: number;
    TaskName: string; 
    ParentTaskId: number;
    ParentTaskName: string;
    ProjectId: number;
    ProjectName: string;    
    TaskStartDate: Date;
    TaskEndDate: Date;
    TaskPriority: number;
    TaskStatus: boolean;
    UserId: number;
    UserName: string;
}