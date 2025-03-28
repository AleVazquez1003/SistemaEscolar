import { Component, OnInit } from '@angular/core';
import { JustificationService } from '../../../Services/justification.service';
import { CommonModule } from '@angular/common';
import { FormGroup,FormBuilder,Validator,ReactiveFormsModule, Validators} from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { response } from 'express';
import { Course } from '../../../Data/interface/Course.model';
import { Justifications } from '../../../Data/interface/Justifications.model';
import { CourseService } from '../../../Services/course.service';
import { StudentService } from '../../../Services/student.service';
import { Student } from '../../../Data/interface/Student.model';


@Component({
  selector: 'app-justification-create',
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './justification-create.component.html',
  styleUrl: './justification-create.component.css'
})
export class JustificationCreateComponent implements OnInit {
  justificationsForm!: FormGroup;
  justifications : Justifications[] = [];
  course : Course[] = [];
  student : Student [] = [];

  constructor(private readonly justicationservice: JustificationService, private readonly formBuilder: FormBuilder,private readonly router:Router,private readonly studentservice:StudentService){}
  

  ngOnInit(): void {
    
    this.justificationsForm = this.formBuilder.group({
      dateJustification:   ['',[Validators.required]],
      reason:  ['',[Validators.required,Validators.min(0.1)]],
      studentId: ['',[Validators.required]]
    });

        // obtiene las categorias del servicio 
        this.studentservice.getStudent().subscribe({
          next: (data) => {
            this.student = data;
          },
          error:(err) =>{
            console.error('error al obtener categorias', err);
          }
        })
  }

  enviarFormulario(){
    this.justificationsForm.markAllAsTouched();
    if(this.justificationsForm.invalid){
      return;     // No enciar el comentario si es invalido
    }

    const JustificationsData = this.justificationsForm.value;

    // llamar al servicio para enviar los datos del producto 
    this.justicationservice.postJustifications(JustificationsData).subscribe({
          next: response => {
            this.router.navigate(['/justification']) // redirigir a la lista de productos
          }, 
          error: err => {
            console.log("Error", err); // mensaje de error 
          }
    });



  }






}
