import { Component, OnInit } from '@angular/core';
import { Schedule } from '../../../Data/interface/Schedule.model';
import { ScheduleService } from '../../../Services/schedule.service';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-schedule-delete',
  imports: [RouterLink],
  templateUrl: './schedule-delete.component.html',
  styleUrl: './schedule-delete.component.css'
})
export class ScheduleDeleteComponent implements OnInit {

  ScheduleId!: number;  
  ScheduleData!: Schedule;  

  constructor(
    private scheduleService:ScheduleService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ){}


  ngOnInit(): void {
    this.ScheduleId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadScheduleData();
  }

  loadScheduleData(){
    this.scheduleService.getById(this.ScheduleId).subscribe( data => {
      const schedule = data;
      if(schedule){
        this.ScheduleData = schedule;
      }
    })
  }

  deleteProduct(){
    this.scheduleService.deleteProduct(this.ScheduleId).subscribe({
      next: () => {
        this.snackBar.open('schedule eliminado con éxito', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
            verticalPosition: 'top',
          panelClass: ['snack-bar-success']
        });
        this.router.navigate(['/schedule']);
      }
    });
  }


}
