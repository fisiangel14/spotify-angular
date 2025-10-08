import { Component, OnInit } from '@angular/core';
import { TaskUser, Task } from '@app/services/task';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  tasks: TaskUser[] = [];

  constructor(private taskService: Task) { }
  ngOnInit() { 
    this.taskService.getTasks().subscribe(
      data => this.tasks = data,
      error => console.error('Error al cargar tareas', error)
    );
  }
}
