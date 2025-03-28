import { Component, OnInit } from '@angular/core';
import { Student } from '../../../Data/interface/student.model';
import { StudentService } from '../../../Services/student.service';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-student-list',
  imports: [RouterLink, NgFor],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  students: Student[] = []

  // Creamos un constructor
  constructor(private apiService: StudentService) { }

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.apiService.getStudents().subscribe(data => {
      this.students = data;
    })
  }
}