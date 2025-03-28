import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../Services/product.service';
import { CommonModule} from '@angular/common';
import { FormGroup,FormBuilder,Validator,ReactiveFormsModule, Validators} from '@angular/forms';
import { ActivatedRoute,Router,RouterModule } from '@angular/router';
import { response } from 'express';
import { CategoryService } from '../../../Services/category.service';
import { Category } from '../../../Data/interface/category.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cateogry-delete',
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './category-delete.component.html',
  styleUrl: './category-delete.component.css'
})
export class CategoryDeleteComponent implements OnInit {

  categoryId!: number;  
  categoryData!: Category;  

  constructor(
    private categoryService:CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
      this.categoryId = Number(this.route.snapshot.paramMap.get('id'));
      this.loadCategoryData();
  }

  loadCategoryData(){
    this.categoryService.getById(this.categoryId).subscribe( data => {
      const category = data;
      if(category){
        this.categoryData = category;
      }
    })
  }

  deleteCategory(){
    this.categoryService.deleteCategory(this.categoryId).subscribe({
      next: () => {
        this.snackBar.open('Categoría eliminado con éxito', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
            verticalPosition: 'top',
          panelClass: ['snack-bar-success']
        });
        this.router.navigate(['/categories']);
      }
    });
  }


}
