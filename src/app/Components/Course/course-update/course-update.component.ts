import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../../../Data/interface/course.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CourseService } from '../../../Services/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-update',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './course-update.component.html',
  styleUrl: './course-update.component.css'
})
export class CourseUpdateComponent implements OnInit {
  courseForm!: FormGroup;  // Formulario reactivo
  courseId!: number;  // ID del producto a actualizar
  courseData!: Course;  // Datos del producto que se editarán

  constructor(
    private route: ActivatedRoute,  // Para acceder a los parámetros de la URL
    private fb: FormBuilder,  // Para crear el formulario reactivo
    private courseService: CourseService,  // Servicio para interactuar con la API
    private router: Router  // Para redirigir al usuario después de la actualización
  ) { }

  ngOnInit(): void {
    // Obtener el ID del producto de la URL
    this.courseId = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar el formulario
    this.courseForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      classroomId: ['', [Validators.required, Validators.min(1)]],
      professor: ['', [Validators.required, Validators.min(1)]]
    });

    // Cargar los datos del producto para editar
    this.loadCourseData();
  }

  // Cargar los datos del producto desde la API
  loadCourseData() {
    this.courseService.getCourses().subscribe(data => {
      const course = data.find(p => p.id === this.courseId);  // Encontrar el producto por ID
      if (course) {
        this.courseData = course;
        this.courseForm.setValue({
          name: course.nameCourse,
          classroomId: course.classRoomId,
          professorId: course.professorId
        });
      } else {
        console.error('Curso no encontrado');
      }
    });
  }

  // Enviar el formulario para actualizar el producto
  updateProduct() {
    if (this.courseForm.invalid) {
      return;  // No enviar si el formulario es inválido
    }

    const updatedCourse: Course = {
      id: this.courseId,
      ...this.courseForm.value  // Obtener los datos actualizados del formulario
    };

    this.courseService.updateCourse(this.courseId, updatedCourse).subscribe({
      next: () => {
        console.log('Curso actualizado');
        this.router.navigate(['/courses']);  // Redirigir a la lista de productos
      },
      error: err => {
        console.error('Error al actualizar el curso:', err);
      }
    });
  }
}

