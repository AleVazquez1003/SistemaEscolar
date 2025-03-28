import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from '../../../Data/interface/course.model';
import { CourseService } from '../../../Services/course.service';
import { Router } from '@angular/router';
import { Classroom } from '../../../Data/interface/classroom.model';
import { ClassroomService } from '../../../Services/classroom.service';

@Component({
  selector: 'app-course-create',
  imports: [],
  templateUrl: './course-create.component.html',
  styleUrl: './course-create.component.css'
})
//Paso 2. Implementar el init
export class CourseCreateComponent implements OnInit {
  courseForm!: FormGroup;  //Declaracion del formulario reactivo como FormGroup
  courses: Course[] = []; //Crear arreglo de las categorias

  //Paso 3. Crear constructor e inyectar nuestro servicio
  //El metodo ngOnit es un ciclo de vida que se ejecuta cuando el componente se inicializa
  constructor(
    private readonly courseService: CourseService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,

    //Llave foranea
    private readonly classroomService: ClassroomService,
    //private readonly professorService: ProffesorService
  ) { }

  //Paso 4.
  // Inicializar el formulario con un grupo de controles
  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(0.1)]],
      categoryId: ['', [Validators.required]]
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
    this.courseForm.markAllAsTouched

    if (this.courseForm.invalid) {
      return; // No envia el formulario si es invalido
    }

    //Obtener todos los datos del formulario para enviarlos
    const courseData = this.courseForm.value;

    //Llamar all servicio para enviar los datos del producto
    this.courseService.postCourse(courseData).subscribe({
      next: response => {
        this.router.navigate(['/courses']); // Redirigir a la lista de productos
      },
      error: err => {
        console.log("Error al crear el curso", err);
      }
    });
  }

}

