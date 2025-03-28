import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Classroom } from '../../../Data/interface/classroom.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ClassroomService } from '../../../Services/classroom.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classroom-update',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './classroom-update.component.html',
  styleUrl: './classroom-update.component.css'
})
export class ClassroomUpdateComponent implements OnInit {
  classroomForm!: FormGroup;  // Formulario reactivo
  classroomId!: number;  // ID del producto a actualizar
  classroomData!: Classroom;  // Datos del producto que se editarán

  constructor(
    private route: ActivatedRoute,  // Para acceder a los parámetros de la URL
    private fb: FormBuilder,  // Para crear el formulario reactivo
    private classroomService: ClassroomService,  // Servicio para interactuar con la API
    private router: Router  // Para redirigir al usuario después de la actualización
  ) { }

  ngOnInit(): void {
    // Obtener el ID del producto de la URL
    this.classroomId = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar el formulario
    this.classroomForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      capacity: ['', [Validators.required, Validators.min(1)]]
    });

    // Cargar los datos del producto para editar
    this.loadProductData();
  }

  // Cargar los datos del producto desde la API
  loadProductData() {
    this.classroomService.getClassrooms().subscribe(data => {
      const classroom = data.find(p => p.id === this.classroomId);  // Encontrar el producto por ID
      if (classroom) {
        this.classroomData = classroom;
        this.classroomForm.setValue({
          name: classroom.nameClassRoom,
          capacity: classroom.capacity
        });
      } else {
        console.error('Salon no encontrado');
      }
    });
  }

  // Enviar el formulario para actualizar el producto
  updateProduct() {
    if (this.classroomForm.invalid) {
      return;  // No enviar si el formulario es inválido
    }

    const updatedClassroom: Classroom = {
      id: this.classroomId,
      ...this.classroomForm.value  // Obtener los datos actualizados del formulario
    };

    this.classroomService.updateClassroom(this.classroomId, updatedClassroom).subscribe({
      next: () => {
        console.log('Salon actualizado');
        this.router.navigate(['/classrooms']);  // Redirigir a la lista de productos
      },
      error: err => {
        console.error('Error al actualizar el salon:', err);
      }
    });
  }
}
