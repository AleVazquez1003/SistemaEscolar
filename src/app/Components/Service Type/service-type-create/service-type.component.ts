import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../../services/product-service.service';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-create',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})

export class ProductCreateComponent implements OnInit{
  productForm !: FormGroup;

  constructor(private productService: ProductServiceService,private formbuilder: FormBuilder, private router: Router){}
  ngOnInit(): void {
      this.productForm = this.formbuilder.group({
        name : ['', [Validators.required, Validators.minLength(3)]],
        price : ['', [Validators.required, Validators.min(0.1)]],

      })
  }

  enviarFormulario(){
    this.productForm.markAllAsTouched();

    if(this.productForm.invalid){
      return; //No enviar el formulario si es invalido
    }
    
    //Obtener los datos de formuario si es valido
    const productData = this.productForm.value;

    //Llamar al servicio para enviar los datos del pueblo
    this.productService.postProduct(productData).subscribe({
      next: response => {
        this.router.navigate(['/products']);//Redirigir a la lista de productos
      },
      error: err => {
        console.log("Error al crear el productp", err);
      }
    });

  }
}


