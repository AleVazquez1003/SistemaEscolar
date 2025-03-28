import { Component, OnInit } from '@angular/core';
import { Classroom } from '../../../Data/interface/classroom.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ClassroomService } from '../../../Services/classroom.service';

@Component({
  selector: 'app-classroom-create',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './classroom-create.component.html',
  styleUrl: './classroom-create.component.css'
})

//Paso 2. Implementar el init
export class ClassroomCreateComponent implements OnInit {
  classroomForm!: FormGroup;  //Declaracion del formulario reactivo como FormGroup
  classrooms: Classroom[] = []; //Crear arreglo de las categorias

  //Paso 3. Crear constructor e inyectar nuestro servicio
  //El metodo ngOnit es un ciclo de vida que se ejecuta cuando el componente se inicializa
  constructor(
    private readonly classroomService: ClassroomService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) { }

  //Paso 4.
  // Inicializar el formulario con un grupo de controles
  ngOnInit(): void {
    this.classroomForm = this.formBuilder.group({
      nameclassroomc: ['', [Validators.required, Validators.minLength(3)]],
      capacity: ['', [Validators.required, Validators.min(10)]],
    });

    // //Obtiene las categorias del servicio
    // this.categoryService.getCategories().subscribe({

    //   next: (data) => {
    //     this.categories = data;
    //   },
    //   error: (err) => {
    //     console.error('Error al obtener categorias', err);
    //   }
    // });

  }



  //Paso 5.
  enviarFormulario() {
    // Marcar todos los campos como tocado para mostrar todos los mensajes de error
    this.classroomForm.markAllAsTouched

    if (this.classroomForm.invalid) {
      return; // No envia el formulario si es invalido
    }

    //Obtener todos los datos del formulario para enviarlos
    const classroomData = this.classroomForm.value;

    //Llamar all servicio para enviar los datos del producto
    this.classroomService.postClassroom(classroomData).subscribe({
      next: response => {
        this.router.navigate(['/classrooms']); // Redirigir a la lista de productos
      },
      error: err => {
        console.log("Error al crear el salon", err);
      }
    });
  }

}
