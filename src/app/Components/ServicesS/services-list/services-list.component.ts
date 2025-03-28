import { Component, OnInit} from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink} from '@angular/router';
import { ServiceService } from '../../../Services/service.service';
import { Service } from '../../../Data/interface/Service.model';
import { Student } from '../../../Data/interface/Student.model';
import { servicetype } from '../../../Data/interface/servicetype.model';

@Component({
  selector: 'app-services-list',
  imports: [],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.css'
})

export class ServicesListComponent implements OnInit {

    services : Service [] = [];
    serviceTypeId : servicetype [] = [];
    studentId : Student [] = [];

    constructor (private serviceService : ServiceService){}

    ngOnInit(): void {
      this.llenarData();
    }


    llenarData(){
      this.serviceService.getServices().subscribe(data => {
        this.services = data;
      })
    }



}
