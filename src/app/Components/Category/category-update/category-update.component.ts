import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';  // Para obtener parámetros de la URL
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';  // Para manejar el formulario reactivo
import { CategoryService } from '../../../Services/category.service';
import { Category } from '../../../Data/interface/category.model';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-category-update',
  imports: [],
  templateUrl: './category-update.component.html',
  styleUrl: './category-update.component.css'
})
export class CategoryUpdateComponent {

  categoryForm!: FormGroup; 
  categoryId!: number;  
  categoryData!: Category;  

  constructor(
    private route: ActivatedRoute,  // Para acceder a los parámetros de la URL
    private fb: FormBuilder,  // Para crear el formulario reactivo
    private categoryService: CategoryService,  // Servicio para interactuar con la API
    private router: Router  // Para redirigir al usuario después de la actualización
  ) { }

  ngOnInit(): void {
    // Obtener el ID del producto de la URL
    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar el formulario
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0.1)]]
    });

    // Cargar los datos del producto para editar
    this.loadCategoryData();
  }

  // Cargar los datos del producto desde la API
  loadCategoryData() {
    this.categoryService.getCategory().subscribe(data => {
      const category = data.find(p => p.id === this.categoryId);  // Encontrar la categoría por ID
      if (category) {
        this.categoryData = category;
        this.categoryForm.setValue({
          name: category.nameCategory
        });
      } else {
        console.error('Categoría no encontrada');
      }
    });
  }

  // Enviar el formulario para actualizar
  updateCategory() {
    if (this.categoryForm.invalid) {
      return;  // No enviar si el formulario es inválido
    }

    const updatedCategory: Category = {
      id: this.categoryId,
      ...this.categoryForm.value  // Obtener los datos actualizados del formulario
    };

    this.categoryService.updateCategory(this.categoryId, updatedCategory).subscribe({
      next: () => {
        console.log('Categoría actualizado');
        this.router.navigate(['/categories']);  // Redirigir a la lista categorías
      },
      error: err => {
        console.error('Error al actualizar categoría:', err);
      }
    });
  }


}
