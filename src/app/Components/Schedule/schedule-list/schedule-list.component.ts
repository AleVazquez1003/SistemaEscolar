import { Component, OnInit } from '@angular/core';
import { Schedule } from '../../../Data/interface/Schedule.model';
import { ScheduleService } from '../../../Services/schedule.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-schedule-list',
  imports: [NgFor,RouterLink],
  templateUrl: './schedule-list.component.html',
  styleUrl: './schedule-list.component.css'
})
export class ScheduleListComponent implements OnInit{

      schedule : Schedule[] = [];
      
      constructor(private scheduleService: ScheduleService){}

      ngOnInit(): void {
        this.llenarData();
      }

      llenarData(){
        this.scheduleService.getSchedule().subscribe(data => {
          this.schedule = data;
        })
      }
}
