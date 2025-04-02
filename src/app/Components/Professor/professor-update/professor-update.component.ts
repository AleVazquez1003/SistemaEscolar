import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Professor } from '../../../Data/interface/professor.model';
import { ProfessorService } from '../../../Services/professor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-professor-update',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './professor-update.component.html',
  styleUrl: './professor-update.component.css'
})
export class ProfessorUpdateComponent {
  productForm!: FormGroup;
  professorId!: number;
  professorData!: Professor;

  constructor(
    private route: ActivatedRoute,  // Para acceder a los parámetros de la URL
    private fb: FormBuilder,  // Para crear el formulario reactivo
    private professorService: ProfessorService,  // Servicio para interactuar con la API
    private router: Router  // Para redirigir al usuario después de la actualización
  ) { }

  ngOnInit(): void {
    // Obtener el ID del producto de la URL
    this.professorId = Number(this.route.snapshot.paramMap.get('id'));  // Cambié 'Id' por 'id'

    // Inicializar el formulario
    this.productForm = this.fb.group({
      nameProfessor: ['', [Validators.required, Validators.minLength(4)]],
      lastNameProfessor: ['', [Validators.required, Validators.minLength(4)]],
      emailProfessor: ['', [Validators.required, Validators.email]],  // Agregado validador de email
      degree: ['', [Validators.required, Validators.minLength(4)]]
    });

    // Cargar los datos del profesor para editar
    this.loadProfessorData();
  }

  // Cargar los datos del profesor desde el servicio
  loadProfessorData() 
  {
    this.professorService.GetProfessor().subscribe(data => 
    {
      const professor = data.find(p => p.id === this.professorId);  // Ahora usamos 'id' en lugar de 'Id'
      if (professor) 
      {
        this.professorData = professor;
        this.productForm.setValue
        ({
          nameProfessor: professor.nameProfessor,
          lastNameProfessor: professor.lastNameProfessor,
          emailProfessor: professor.emailProfessor,
          degree: professor.degree
        });
      } 
      else 
      {
        Swal.fire('Error', 'Profesor no encontrado', 'error');
      }
    });
  }

  // Método para actualizar los datos del profesor
  updateProfessor() 
  {
    if(this.productForm.invalid)
    {
      return;  
    }

    const updatedProfessor: Professor =
    {
      id: this.professorId,
      ...this.productForm.value
    };

    this.professorService.UpdateProfessor(this.professorId, updatedProfessor).subscribe({
      next: () =>
      {
        Swal.fire
        ({
          icon: 'success',
          title: '¡Exito!',
          text: 'Professor modificado exitosamente',
          showConfirmButton: false,
          timer: 1800
        });
        this.router.navigate(['/Professor']);  // Redirigir a la lista de productos
      },
      error: err => 
      {
        Swal.fire
        ({
          icon: 'error',
          title: 'Error!',
          text: 'Error al modificar Professor',
          showConfirmButton: false,
          timer: 1800
        });
        console.error('Error al actualizar el producto:', err);
      }
    });
  }
}
