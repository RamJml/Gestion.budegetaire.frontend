import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../Model/Project';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  project:Project;

  constructor(private http:HttpClient) {   }
  Url='http://localhost:8080/gb/projects';
  getProjects(){
    return this.http.get<Project[]>(this.Url);
  }
  createProject(project:Project){
    
    return this.http.post<Project>(this.Url,project);
  }
  getProjectId(id:number){
    return this.http.get<Project>(this.Url+"/"+id);    
  }
  updateProject(project:Project){
    return this.http.put<Project>(this.Url+"/"+project.id,project);  
  }
  deleteProject(project:Project){
    return this.http.delete<Project>(this.Url+"/"+project.id);

  }
}
