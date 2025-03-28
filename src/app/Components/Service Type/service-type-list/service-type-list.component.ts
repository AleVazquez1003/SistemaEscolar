import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { servicetype } from '../../../Data/interface/servicetype.model';
import { ServiceTypeService } from '../../../Services/service-type.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicetype-list',
  imports: [NgFor, RouterLink],
  templateUrl: './service-type-list.component.html',
  styleUrl: './service-type-list.component.css'
})
export class ServiceTypeListComponent implements OnInit {
  servicetypes: servicetype[] = [];
constructor(private apiService: ServiceTypeService){}

  ngOnInit(): void {
      this.llenarData();
  }

  llenarData(){
    this.apiService.getServiceTypes().subscribe(data => {
      this.servicetypes = data;
    })
  }
}

