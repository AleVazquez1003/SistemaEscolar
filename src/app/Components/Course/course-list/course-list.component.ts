import { Component, OnInit } from '@angular/core';
import { Course } from '../../../Data/interface/course.model';
import { CourseService } from '../../../Services/course.service';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-course-list',
  imports: [RouterLink, NgFor],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
// Necesitamos OnInit para hacer un PageLoad
export class CourseListComponent implements OnInit {
  //Definir un arreglo despues de haberlo importado
  courses: Course[] = []

  // Creamos un constructor
  constructor (private apiService: CourseService){}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getCourses().subscribe(data => {
      this.courses = data;
    })
  }
}
