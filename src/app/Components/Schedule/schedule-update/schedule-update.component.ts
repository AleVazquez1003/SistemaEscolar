import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';  
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';  
import { Schedule } from '../../../Data/interface/Schedule.model';
import { Assignment } from '../../../Data/interface/Assignment.model';
import { Course } from '../../../Data/interface/Course.model';
import { ScheduleService } from '../../../Services/schedule.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule-update',
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './schedule-update.component.html',
  styleUrl: './schedule-update.component.css'
})
export class ScheduleUpdateComponent implements OnInit {

  scheduleForm! : FormGroup;
  scheduleData! : Schedule;
  scheduleId!   : number

  constructor(
    private route: ActivatedRoute,  
    private fb: FormBuilder,  
    private scheduleService: ScheduleService,  
    private router: Router  
  ){ }

  ngOnInit(): void {
    this.scheduleId = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar el formulario
    this.scheduleForm = this.fb.group({
      dayweek: ['', [Validators.required]],
      courseid: ['', [Validators.required]],
      assignmentId: ['', [Validators.required]],
      turnId: ['', [Validators.required]]

    });


    this.loadScheduleData();
  }

  loadScheduleData() {
    this.scheduleService.getSchedule().subscribe(data => {
      const schedule = data.find(p => p.id === this.scheduleId);  
      if (schedule) {
        this.scheduleData = schedule;
        this.scheduleForm.setValue({
         dayweek : schedule.dayweek,
         courseId : schedule.courseId,
         assignmentId : schedule.assignmentId,
         turnId : schedule.id

        });
      } else {
        console.error('Schedule no encontrado');
      }
    });
  }


  updateSchedule() {
    if (this.scheduleForm.invalid) {
      return;  
    }

    const updatedSchedule: Schedule = {
      id: this.scheduleId,
      ...this.scheduleForm.value  // Obtener los datos actualizados del formulario
    };

    this.scheduleService.updateSchedule(this.scheduleId, updatedSchedule).subscribe({
      next: () => {
        console.log('Schedule update');
        this.router.navigate(['/schedule']);  
      },
      error: err => {
        console.error('Error to update schedule:', err);
      }
    });
  }




}
