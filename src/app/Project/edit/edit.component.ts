import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Project } from 'src/app/Model/Project';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  project:Project=new Project();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Edit();
  }
  
  Edit(){
    let id=localStorage.getItem("id");
    this.service.getProjectId(+id)
    .subscribe(data=>{
      this.project=data;
    })
  }
  Update(project:Project){
    this.service.updateProject(project)
    .subscribe(data=>{
      this.project=data;
      alert("vdsfsfsfsdf");
      this.router.navigate(["list"])
    })
  }

}
