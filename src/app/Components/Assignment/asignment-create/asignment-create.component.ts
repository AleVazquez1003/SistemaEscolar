import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../../../Services/assignment.service';
import { Assignment } from '../../../Data/interface/Assignment.model';
import { CommonModule } from '@angular/common';
import { FormGroup,FormBuilder,Validator,ReactiveFormsModule, Validators} from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { response } from 'express';



@Component({
  selector: 'app-asignment-create',
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './asignment-create.component.html',
  styleUrl: './asignment-create.component.css'
})
export class AsignmentCreateComponent implements OnInit {

    assignmentForm!: FormGroup;
    constructor(private readonly assignmentService:AssignmentService, private readonly formBuilder: FormBuilder,private readonly router:Router){} 

    ngOnInit(): void {
      
      this.assignmentForm = this.formBuilder.group({
        nameAssignment:   ['',[Validators.required]],
      });
    }

    enviarFormulario(){
      this.assignmentForm.markAllAsTouched();
      if(this.assignmentForm.invalid){
        return;    
      }
  
      const AssignmentData = this.assignmentForm.value;
  
      this.assignmentService.postAssignment(AssignmentData).subscribe({
            next: response => {
              this.router.navigate(['/assignment']) 
            }, 
            error: err => {
              console.log("Error creating product", err); 
            }
      });
  
  
  
    }





}
