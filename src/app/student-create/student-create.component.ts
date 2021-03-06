import { HomeServiceService } from './../home-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  student: {id: any, name: any, description: any, email: any} = {id: null, name: "", description: "", email: ""}
  homeService: any;
  constructor() { }

  ngOnInit(): void {
  }
createStudent(){
  console.log(this.student);
  this.homeService.createStudent(this.student);
  this.student = {id: null, name: "", description: "", email: ""};
}
}
