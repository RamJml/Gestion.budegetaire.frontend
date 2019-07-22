import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Project } from 'src/app/Model/Project';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  project:Project=new Project();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }
  
  Save(){
    this.service.createProject(this.project)
    .subscribe(data=>{
      alert("success");
      this.router.navigate(["list"]);
    })

  }

}
