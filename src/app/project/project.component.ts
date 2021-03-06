import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';
import * as firebase from "firebase";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
    currentRoute: string = this.router.url;

  constructor(
    private router: Router,
    private projectService: ProjectService) { }

    ngOnInit(){
      this.projects = this.projectService.getProjects();

    }

    goToDetailPage(clickedProject) {
      this.router.navigate(['projects', clickedProject.$key]);
    };

}
