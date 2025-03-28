import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../../Data/interface/product.model';
import { CategoryService } from '../../../Services/category.service';
import { Category } from '../../../Data/interface/category.model';

@Component({
  selector: 'app-category-list',
  imports: [NgFor, RouterLink],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit{
  category : Category[] = [];
   
  constructor(private apiService:CategoryService){}

  ngOnInit(): void {
    this.llenarData()
  }

  llenarData()
  { 
    this.apiService.getCategory().subscribe(data => {
      this.category = data;
    })
  }


}
