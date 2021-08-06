import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class HomeServiceService{

	students = [
		{id: 101, name: "Alex", description: "Alex Details", email: "alex@xyz.com"},
		{id: 201, name: "Stan", description: "Stan Details", email: "stan@xyz.com"},
		{id: 301, name: "Jerry", description: "Jerry Details", email: "jerry@xyz.com"},
	]
	constructor() { }
	public getStudents(): Array<{id: any, name: any, description: any, email: any}>{
		return this.students;}

		public createStudents(students: {id: any, name: any, description: any, email: any}){
			this.students.push(students)
		}
	}
