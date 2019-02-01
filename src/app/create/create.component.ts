import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../model/project.model';
import * as firebase from "firebase";
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;


  constructor(private projectService: ProjectService) {
    //     this.authService.user.subscribe(user => {
    //   if (user == null) {
    //     this.isLoggedIn = false;
    //   } else {
    //     this.isLoggedIn = true;
    //   }
    // });

  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  submitForm(
      name: string,
      creator: string,
      projectDescription: string,
      fundGoal: number,
      fundDescription: string,
      reward: string)
      {
        var newProject: Project = new Project(name, creator, projectDescription, fundGoal, fundDescription, reward);
        this.projectService.addProject(newProject);
      }
}
