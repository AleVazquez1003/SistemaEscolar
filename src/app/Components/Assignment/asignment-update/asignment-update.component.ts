import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router'; 
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms'; 
import { Assignment } from '../../../Data/interface/Assignment.model';
import { AssignmentService } from '../../../Services/assignment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asignment-update',
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './asignment-update.component.html',
  styleUrl: './asignment-update.component.css'
})
export class AsignmentUpdateComponent implements OnInit{

     assignmentForm! : FormGroup;
     assignmentId! : number;
     assignmentData! : Assignment;

    constructor(
      private route: ActivatedRoute,  // Para acceder a los parámetros de la URL
      private fb: FormBuilder,  // Para crear el formulario reactivo
      private assignmentService: AssignmentService,  // Servicio para interactuar con la API
      private router: Router  // Para redirigir al usuario después de la actualización


    ){}

    ngOnInit(): void {
      this.assignmentId = Number(this.route.snapshot.paramMap.get('id'));

      this.assignmentForm = this.fb.group({
        nameasignment:['', [Validators.required]]
      });
      
      this.loadAssignmentData();
    }

    loadAssignmentData() {
      this.assignmentService.getAssigment().subscribe(data => {
        const assignent = data.find(p => p.id === this.assignmentId);  // Encontrar el producto por ID
        if (assignent) {
          this.assignmentData = assignent;
          this.assignmentForm.setValue({

            nameassignment : assignent.nameAssignment
          });
        } else {
          console.error('assigment not found');
        }
      });
    }

    






  updateAssignment() {
      if (this.assignmentForm.invalid) {
        return;  // No enviar si el formulario es inválido
      }
  
      const updatedAssignmet: Assignment = {
        id: this.assignmentId,
        ...this.assignmentForm.value  // Obtener los datos actualizados del formulario
      };
  
      this.assignmentService.updateAssignment(this.assignmentId, updatedAssignmet).subscribe({
        next: () => {
          console.log('Assignment update');
          this.router.navigate(['/assignent']);  // Redirigir a la lista de productos
        },
        error: err => {
          console.error('Error updating the assignment:', err);
        }
      });
    }







}
