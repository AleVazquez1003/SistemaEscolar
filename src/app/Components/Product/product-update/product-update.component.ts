import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';  // Para obtener parámetros de la URL
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';  // Para manejar el formulario reactivo
import { ProductService } from '../../../Services/product.service';
import { Product } from '../../../Data/interface/product.model';
import { CommonModule } from '@angular/common';    // Importa CommonModule que es necesario para algunas funcionalidades 

@Component({
  selector: 'app-products-update',
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './products-update.component.html',
  styleUrl: './products-update.component.css'
})
export class ProductsUpdateComponent implements OnInit {

  productForm!: FormGroup;  // Formulario reactivo
  productId!: number;  // ID del producto a actualizar
  productData!: Product;  // Datos del producto que se editarán

  constructor(
    private route: ActivatedRoute,  // Para acceder a los parámetros de la URL
    private fb: FormBuilder,  // Para crear el formulario reactivo
    private productService: ProductService,  // Servicio para interactuar con la API
    private router: Router  // Para redirigir al usuario después de la actualización
  ) { }

  ngOnInit(): void {
    // Obtener el ID del producto de la URL
    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar el formulario
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0.1)]]
    });

    // Cargar los datos del producto para editar
    this.loadProductData();
  }

  // Cargar los datos del producto desde la API
  loadProductData() {
    this.productService.getProducts().subscribe(data => {
      const product = data.find(p => p.id === this.productId);  // Encontrar el producto por ID
      if (product) {
        this.productData = product;
        this.productForm.setValue({
          name: product.nameProduct,
          image: product.imageURL,
          price: product.price
        });
      } else {
        console.error('Producto no encontrado');
      }
    });
  }

  // Enviar el formulario para actualizar el producto
  updateProduct() {
    if (this.productForm.invalid) {
      return;  // No enviar si el formulario es inválido
    }

    const updatedProduct: Product = {
      id: this.productId,
      ...this.productForm.value  // Obtener los datos actualizados del formulario
    };

    this.productService.updateProduct(this.productId, updatedProduct).subscribe({
      next: () => {
        console.log('Producto actualizado');
        this.router.navigate(['/products']);  // Redirigir a la lista de productos
      },
      error: err => {
        console.error('Error al actualizar el producto:', err);
      }
    });
  }

}
