import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TaskUser {
  id?: number;
  title: string;
  description: string;
  state: boolean;
  priority: number;
  priority_display?: string;
  created?: string;
}

@Injectable({
  providedIn: 'root'
})
export class Task {
  
  private apiUrl = 'http://localhost:8000/api/tasks/';

  constructor(private http: HttpClient) { }

  // Obtener todas las tareas
  getTasks(): Observable<TaskUser[]> {
    return this.http.get<TaskUser[]>(this.apiUrl);
  }

  // Crear nueva tarea
  addTask(task: TaskUser): Observable<TaskUser> {
    return this.http.post<TaskUser>(this.apiUrl, task);
  }

  // Actualizar tarea
  updateTask(task: TaskUser): Observable<TaskUser> {
    return this.http.put<TaskUser>(`${this.apiUrl}${task.id}/`, task);
  }

  // Eliminar tarea
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}
