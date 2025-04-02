import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProfessorService } from '../../../Services/professor.service';
import { Professor } from '../../../Data/interface/professor.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-professor-delete',
  imports: [RouterLink],
  templateUrl: './professor-delete.component.html',
  styleUrl: './professor-delete.component.css'
})
export class ProfessorDeleteComponent 
{
  professorId!: number;  // ID del producto a eliminar
  professorData!: Professor;  // Datos del producto que se eliminará

  constructor(
    private professorService: ProfessorService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  )
  {

  }

  ngOnInit(): void 
  {
    this.professorId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadProfessorData();
  }

  loadProfessorData()
  {
    this.professorService.GetById(this.professorId).subscribe( data => 
    {
      const professor = data;
      if(professor)
      {
        this.professorData = professor;
      }
    })
  }

  DeleteProfessor()
  {
    this.professorService.DeleteProfessor(this.professorId).subscribe
    ({
      next: () => 
      {
        Swal.fire
        ({
          title: '¡Éxito!',
          text: 'Profesor Eliminado correctamente.',
          icon: 'success',
          timer: 1800,
          showConfirmButton: false
        }).then(() => 
        {
          // Redirige a la lista de profesores después de la confirmación
          this.router.navigate(['/Professor']);
        });
      }
    });
  }

}
