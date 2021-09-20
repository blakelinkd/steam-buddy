import { Component, OnInit, Input, DebugElement } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  
  
  @Input() task! : Task;
  
  constructor() { 
    
  }
  
  ngOnInit(): void {
    console.log("from class task-item: " + this.task?.text);
  }

}
