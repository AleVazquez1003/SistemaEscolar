import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../../Data/interface/product.model';
import { ProductService } from '../../../Services/product.service';

@Component({
  selector: 'app-products-list',
  imports: [NgFor,RouterLink],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit{
  products : Product[] = [];
   
  constructor(private apiService:ProductService){}

  ngOnInit(): void {
    this.llenarData()
  }

  llenarData()
  { 
    this.apiService.getProducts().subscribe(data => {
      this.products = data;
    })
  }


}
