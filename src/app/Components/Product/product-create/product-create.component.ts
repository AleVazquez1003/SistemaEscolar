import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../Services/product.service';
import { CommonModule} from '@angular/common';
import { FormGroup,FormBuilder,Validator,ReactiveFormsModule, Validators} from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { response } from 'express';
import { Category } from '../../../Data/interface/category.model';
import { CategoryService } from '../../../Services/category.service';
@Component({
  selector: 'app-products-create',
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './products-create.component.html',
  styleUrl: './products-create.component.css'
})

export class ProductsCreateComponent implements OnInit{
  productForm!:FormGroup;   // declaracion del formulario reactivo como FormGroup  
  categories: Category[] = [];


  constructor(private readonly productService: ProductService, private readonly formBuilder: FormBuilder,private readonly router:Router,private readonly categoryService:CategoryService){}

  // el método ngOnInit es un ciclo de vida que se ejecuta cuando el componnt se inicializa
  ngOnInit(): void {
    // inicializar el formulario con un grupo de controles
    this.productForm = this.formBuilder.group({
      nameCategory:   ['',[Validators.required,Validators.minLength(3)]]
    });

        // obtiene las categorias del servicio 
        this.categoryService.getCategory().subscribe({
          next: (data) => {
            this.categories = data;
          },
          error:(err) =>{
            console.error('error al obtener categorias', err);
          }
        })

  }


  enviarFormulario(){
    this.productForm.markAllAsTouched();
    if(this.productForm.invalid){
      return;     // No enciar el comentario si es invalido
    }

    const ProductData = this.productForm.value;

    // llamar al servicio para enviar los datos del producto 
    this.productService.postProduct(ProductData).subscribe({
          next: response => {
            this.router.navigate(['/products']) // redirigir a la lista de productos
          }, 
          error: err => {
            console.log("Error al crear producto", err); // mensaje de error 
          }
    });



  }


}
