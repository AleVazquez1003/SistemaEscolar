import { Component, OnInit} from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Justifications } from '../../../Data/interface/Justifications.model';
import { JustificationService } from '../../../Services/justification.service';


@Component({
  selector: 'app-justification-list',
  imports: [NgFor,RouterLink],
  templateUrl: './justification-list.component.html',
  styleUrl: './justification-list.component.css'
})
export class JustificationListComponent implements OnInit {
  justifications : Justifications[] = [];
  
  constructor(private justificationservices:JustificationService){}
  
  ngOnInit(): void {
    this.llenarData();  
  }

  llenarData(){
    this.justificationservices.getJustifications().subscribe(data => {
      this.justifications = data;
    })
  }




}
