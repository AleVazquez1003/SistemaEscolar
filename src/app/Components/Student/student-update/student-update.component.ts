import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Student } from '../../../Data/interface/student.model';
import { StudentService } from '../../../Services/student.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-update',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './student-update.component.html',
  styleUrl: './student-update.component.css'
})
export class StudentUpdateComponent implements OnInit {
  studentForm!: FormGroup;  // Formulario reactivo
  studentId!: number;  // ID del producto a actualizar
  studentData!: Student;  // Datos del producto que se editarán

  constructor(
    private route: ActivatedRoute,  // Para acceder a los parámetros de la URL
    private fb: FormBuilder,  // Para crear el formulario reactivo
    private studentService: StudentService,  // Servicio para interactuar con la API
    private router: Router  // Para redirigir al usuario después de la actualización
  ) { }

  ngOnInit(): void {
    // Obtener el ID del producto de la URL
    this.studentId = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar el formulario
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.minLength(3)]],
      courseId: ['', [Validators.required]]
    });
    // Cargar los datos del producto para editar
    this.loadProductData();
  }

  // Cargar los datos del producto desde la API
  loadProductData() {
    this.studentService.getStudents().subscribe(data => {
      const student = data.find(p => p.id === this.studentId);  // Encontrar el producto por ID
      if (student) {
        this.studentData = student;
        this.studentForm.setValue({
          name: student.nameStudent,
          last: student.lastNameStudent,
          email: student.emailStudent,
          phone: student.phoneSudent,
          courseId : student.courseId
        });
      } else {
        console.error('Alumno no encontrado');
      }
    });
  }

  // Enviar el formulario para actualizar el producto
    updateProduct() {
      if (this.studentForm.invalid) {
        return;  // No enviar si el formulario es inválido
      }
  
      const updatedStudent: Student = {
        id: this.studentId,
        ...this.studentForm.value  // Obtener los datos actualizados del formulario
      };
  
      this.studentService.updateStudent(this.studentId, updatedStudent).subscribe({
        next: () => {
          console.log('Alumno actualizado');
          this.router.navigate(['/students']);  // Redirigir a la lista de productos
        },
        error: err => {
          console.error('Error al actualizar el alumno:', err);
        }
      });
    }
}
