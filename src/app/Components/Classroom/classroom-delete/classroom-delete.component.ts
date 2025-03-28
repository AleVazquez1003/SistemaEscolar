/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Classroom } from '../../../Data/interface/classroom.model';
import { ClassroomService } from '../../../Services/classroom.service';

@Component({
  selector: 'app-classroom-delete',
  imports: [RouterLink],
  templateUrl: './classroom-delete.component.html',
  styleUrl: './classroom-delete.component.css'
})
export class ClassroomDeleteComponent implements OnInit {
  classroomId!: number;  // ID del producto a eliminar
  classroomData!: Classroom;  // Datos del producto que se eliminará

  constructor(
    private classroomService: ClassroomService,
    private route: ActivatedRoute,
    private router: Router,
    //private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
      this.classroomId = Number(this.route.snapshot.paramMap.get('id'));
      this.loadClassroomData();
  }

  loadClassroomData(){
    this.classroomService.getById(this.classroomId).subscribe( data => {
      const classroom = data;
      if(classroom){
        this.classroomData = classroom;
      }
    })
  }

  deleteClassroom(){
    this.classroomService.deleteClassroom(this.classroomId).subscribe({
      next: () => {
        this.snackBar.open('Salon eliminado con éxito', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
            verticalPosition: 'top',
          panelClass: ['snack-bar-success']
        });
        this.router.navigate(['/classrooms']);
      }
    });
  }

}*/