import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../../../Data/interface/course.model';
import { StudentService } from '../../../Services/student.service';
import { CourseService } from '../../../Services/course.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-student-create',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './student-create.component.html',
  styleUrl: './student-create.component.css'
})
export class StudentCreateComponent implements OnInit {
  studentForm!: FormGroup;  
  courses: Course[] = []; 

  //El metodo ngOnit es un ciclo de vida que se ejecuta cuando el componente se inicializa
  constructor(
    private readonly studentService: StudentService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly courseService: CourseService
  ) { }

  //Paso 4.
  // Inicializar el formulario con un grupo de controles
  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.minLength(3)]],
      couseId: ['', [Validators.required]]
    });

     //Obtiene las categorias del servicio
     this.courseService.getCourses().subscribe({

      next: (data) => {
        this.courses = data;
      },
      error: (err) => {
        console.error('Error al obtener cursos', err);
      }
    });
  }


  //Paso 5.
  enviarFormulario() {
    // Marcar todos los campos como tocado para mostrar todos los mensajes de error
    this.studentForm.markAllAsTouched

    if (this.studentForm.invalid) {
      return; // No envia el formulario si es invalido
    }

    //Obtener todos los datos del formulario para enviarlos
    const studentData = this.studentForm.value;

    //Llamar all servicio para enviar los datos del producto
    this.studentService.postStudent(studentData).subscribe({
      next: response => {
        this.router.navigate(['/students']); // Redirigir a la lista de productos
      },
      error: err => {
        console.log("Error al crear el Alumno", err);
      }
    });
  }
    
}

