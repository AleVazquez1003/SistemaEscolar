import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../../../Services/schedule.service';
import { Schedule } from '../../../Data/interface/Schedule.model';
import { CommonModule } from '@angular/common';
import { FormGroup,FormBuilder,Validator,ReactiveFormsModule, Validators} from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { response } from 'express';
import { turn } from '../../../Data/interface/turn.model';
import { Assignment } from '../../../Data/interface/Assignment.model';
import { Course } from '../../../Data/interface/Course.model';
import { AssignmentService } from '../../../Services/assignment.service';
import { TurnService } from '../../../Services/turn.service';
import { CourseService } from '../../../Services/course.service';

@Component({
  selector: 'app-schedule-create',
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './schedule-create.component.html',
  styleUrl: './schedule-create.component.css'
})
export class ScheduleCreateComponent implements OnInit {
      
  ScheduleForm!:FormGroup;
  schedule : Schedule [] = [];
  turn : turn [] = [];  // turn catalog
  assignment : Assignment [] = []; // assignment catalog
  course : Course [] = []; // course catalog

  constructor(private readonly scheduleService:ScheduleService, private readonly formBuilder:FormBuilder,private readonly router:Router,private readonly assignmentService: AssignmentService,private readonly turnService:TurnService,private readonly courseService: CourseService){}

  ngOnInit(): void {
    this.ScheduleForm = this.formBuilder.group({
        dayweek: ['',[Validators.required]],
        courseId : ['',[Validators.required]],
        assignmentId: ['',[Validators.required]],
        turnId: ['',[Validators.required]]
    });

    this.assignmentService.getAssigment().subscribe({
      next:(data) => {
        this.assignment = data;
      }, 
      error:(err) => {
        console.error("error al obtener los assignments",err);
      }
    });

    this.turnService.getListTurn().subscribe({
      next:(data) => {
        this.turn = data;
      }, 
      error:(err) => {
        console.error("error al obtener los turns",err);
      }
    })

    this.courseService.getCourse().subscribe({
      next:(data) => {
        this.course = data;
      }, 
      error:(err) => {
        console.error("error al obtener los turns",err);
      }
    })
  } // fin init 

  enviarFormulario(){
    this.ScheduleForm.markAllAsTouched();
    if(this.ScheduleForm.invalid){
      return;    
    }

    const ScheduleData = this.ScheduleForm.value;
    this.scheduleService.postSchedule(ScheduleData).subscribe({
          next: response => {
            this.router.navigate(['/schedule']) 
          }, 
          error: err => {
            console.log("Error al crear producto", err); 
          }
    });

  }
}