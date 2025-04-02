import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../../../Services/professor.service';
import { Professor } from '../../../Data/interface/professor.model';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-professor-list',
  imports: [NgFor, RouterLink],
  templateUrl: './professor-list.component.html',
  styleUrl: './professor-list.component.css'
})
export class ProfessorListComponent implements OnInit
{
  Professors: Professor[] = [];

  constructor(private apiService: ProfessorService)
  {

  }

  ngOnInit(): void 
  {
    this.llenarData();  
  }

  llenarData()
  {
    this.apiService.GetProfessor().subscribe(data => 
    {
      this.Professors = data;  
      console.log(data);
    })
  }
}
