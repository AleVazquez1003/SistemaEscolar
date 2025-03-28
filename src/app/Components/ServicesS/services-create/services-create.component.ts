import { Component, OnInit} from '@angular/core';
import { ServiceService } from '../../../Services/service.service';
import { Service } from '../../../Data/interface/Service.model';
import { CommonModule } from '@angular/common';
import { FormGroup,FormBuilder,Validator,ReactiveFormsModule, Validators} from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { response } from 'express';
import { Student } from '../../../Data/interface/Student.model';
import { servicetype } from '../../../Data/interface/servicetype.model';
import { StudentService } from '../../../Services/student.service';
import { ServiceTypeService } from '../../../Services/service-type.service';

@Component({
  selector: 'app-services-create',
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './services-create.component.html',
  styleUrl: './services-create.component.css'
})
export class ServicesCreateComponent implements OnInit {

  ServiceForm!: FormGroup;
  serviceType : servicetype [] = [];
  student : Student [] = []; 

  constructor(private readonly serviceService: ServiceService, private readonly formBuilder: FormBuilder,private readonly router:Router,private readonly studentservice:StudentService, private readonly ServiserviceType:ServiceTypeService ){}

  ngOnInit(): void {
    // inicializar el formulario con un grupo de controles
    this.ServiceForm = this.formBuilder.group({
      nameService:   ['',[Validators.required]],
      serviceTypeId:  ['',[Validators.required]],
      studentId: ['',[Validators.required]]
    });

        // obtiene las categorias del typo servicio 
        this.ServiserviceType.getServiceTypes().subscribe({
          next: (data) => {
            this.serviceType = data;
          },
          error:(err) =>{
            console.error('error al obtener service', err);
          }
        })
  }

  enviarFormulario(){
    this.ServiceForm.markAllAsTouched();
    if(this.ServiceForm.invalid){
      return;     
    }

    const serviceData = this.ServiceForm.value;

    // llamar al servicio para enviar los datos del producto 
    this.serviceService.postService(serviceData).subscribe({
          next: response => {
            this.router.navigate(['/service']) // redirigir a la lista de productos
          }, 
          error: err => {
            console.log("Error service", err); // mensaje de error 
          }
    });
  }
}
