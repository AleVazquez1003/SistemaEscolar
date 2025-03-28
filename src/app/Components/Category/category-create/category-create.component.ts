import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../Services/product.service';
import { CommonModule} from '@angular/common';
import { FormGroup,FormBuilder,Validator,ReactiveFormsModule, Validators} from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { response } from 'express';
import { CategoryService } from '../../../Services/category.service';
import { Category } from '../../../Data/interface/category.model';

@Component({
  selector: 'app-products-create',
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './products-create.component.html',
  styleUrl: './products-create.component.css'
})

export class CategoryCreateComponent implements OnInit{
  categoryForm!:FormGroup;   // declaracion del formulario reactivo como FormGroup  
  categories: Category[] = [];


  constructor(private readonly categoryService: CategoryService, private readonly formBuilder: FormBuilder,private readonly router:Router){}

  // el método ngOnInit es un ciclo de vida que se ejecuta cuando el componnt se inicializa
  ngOnInit(): void {
    // inicializar el formulario con un grupo de controles
    this.categoryForm = this.formBuilder.group({
      name:   ['',[Validators.required,Validators.minLength(3)]],
      price:  ['',[Validators.required,Validators.min(0.1)]],
      categoryId: ['',[Validators.required]]
    });

        /* obtiene las categorias del servicio 
        this.categoryService.getCategory().subscribe({
          next: (data) => {
            this.categories = data;
          },
          error:(err) =>{
            console.error('error al obtener categorias', err);
          }
        })*/

  }


  enviarFormulario(){
    this.categoryForm.markAllAsTouched();
    if(this.categoryForm.invalid){
      return;     // No enciar el comentario si es invalido
    }

    const categoryData = this.categoryForm.value;

    // llamar al servicio para enviar los datos
    this.categoryService.postCategory(categoryData).subscribe({
          next: response => {
            this.router.navigate(['/category']) 
          }, 
          error: err => {
            console.log("Error al crear categoría", err); // mensaje de error 
          }
    });



  }


}
