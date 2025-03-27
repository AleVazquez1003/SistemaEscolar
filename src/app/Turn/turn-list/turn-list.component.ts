import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TurnService } from '../../Services/turn.service';
import { turn } from '../../Data/interface/turn.model';

@Component({
  selector: 'app-turn-list',
  imports: [NgFor,RouterLink],
  templateUrl: './turn-list.component.html',
  styleUrl: './turn-list.component.css'
})
export class TurnListComponent implements OnInit {
 
  turns : turn [] = [];
  constructor(private apiService:TurnService){}

  ngOnInit(): void {
    this.llenarData()
  }

  llenarData()
  { 
    //this.apiService.getProducts().subscribe(data => {
    //  this.products = data;
    //})
  }

}
