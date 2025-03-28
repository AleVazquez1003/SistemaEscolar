
import { Component,OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Assignment} from '../../../Data/interface/Assignment.model';
import { AssignmentService } from '../../../Services/assignment.service';

@Component({
  selector: 'app-asignment-list',
  imports: [NgFor],
  templateUrl: './asignment-list.component.html',
  styleUrl: './asignment-list.component.css'
})

export class AsignmentListComponent implements OnInit {

      assignment : Assignment[] = [];
      
      constructor(private apiService: AssignmentService){}

      ngOnInit(): void {
        this.llenarData();
      }

      llenarData() 
      {
        this.apiService.getAssigment().subscribe(data => {
        this.assignment = data;
      })
  }
}
