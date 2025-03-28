/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Student } from '../../../Data/interface/student.model';
import { StudentService } from '../../../Services/student.service';

@Component({
  selector: 'app-student-delete',
  imports: [RouterLink],
  templateUrl: './student-delete.component.html',
  styleUrl: './student-delete.component.css'
})
export class StudentDeleteComponent implements OnInit {
  studentId!: number;  // ID del producto a eliminar
  studentData!: Student;  // Datos del producto que se eliminará

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
      this.studentId = Number(this.route.snapshot.paramMap.get('id'));
      this.loadStudentData();
  }

  loadStudentData(){
    this.studentService.getById(this.studentId).subscribe( data => {
      const student = data;
      if(student){
        this.studentData = student;
      }
    })
  }

  deleteStudent(){
    this.studentService.deleteStudent(this.studentId).subscribe({
      next: () => {
        this.snackBar.open('Alumno eliminado con éxito', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
            verticalPosition: 'top',
          panelClass: ['snack-bar-success']
        });
        this.router.navigate(['/students']);
      }
    });
  }

}*/
