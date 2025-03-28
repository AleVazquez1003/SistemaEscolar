/*import { Component, OnInit } from '@angular/core';
import { Course } from '../../../Data/interface/course.model';
import { CourseService } from '../../../Services/course.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-delete',
  imports: [RouterLink],
  templateUrl: './course-delete.component.html',
  styleUrl: './course-delete.component.css'
})
export class CourseDeleteComponent implements OnInit {
  courseId!: number;  // ID del producto a eliminar
  courseData!: Course;  // Datos del producto que se eliminará

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
      this.courseId = Number(this.route.snapshot.paramMap.get('id'));
      this.loadCourseData();
  }

  loadCourseData(){
    this.courseService.getById(this.courseId).subscribe( data => {
      const course = data;
      if(course){
        this.courseData = course;
      }
    })
  }

  deleteCourse(){
    this.courseService.deleteCourse(this.courseId).subscribe({
      next: () => {
        this.snackBar.open('Curso eliminado con éxito', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
            verticalPosition: 'top',
          panelClass: ['snack-bar-success']
        });
        this.router.navigate(['/courses']);
      }
    });
  }

}*/
