import { Component, OnInit } from '@angular/core';
import { Classroom } from '../../../Data/interface/classroom.model';
import { ClassroomService } from '../../../Services/classroom.service';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-classroom-list',
  imports: [RouterLink, NgFor],
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css'
})
// Necesitamos OnInit para hacer un PageLoad
export class ClassroomListComponent implements OnInit {
  //Definir un arreglo despues de haberlo importado
  classrooms: Classroom[] = []

  // Creamos un constructor
  constructor (private apiService: ClassroomService){}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getClassrooms().subscribe(data => {
      this.classrooms = data;
    })
  }
}