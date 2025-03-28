import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../Services/service.service';
import { Service } from '../../../Data/interface/Service.model';
import { Student } from '../../../Data/interface/Student.model';
import { servicetype } from '../../../Data/interface/servicetype.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';  
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceTypeService } from '../../../Services/service-type.service';

@Component({
  selector: 'app-services-update',
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './services-update.component.html',
  styleUrl: './services-update.component.css'
})

export class ServicesUpdateComponent implements OnInit {

  ServiceForm!: FormGroup; 
  serviceId!: number;  
  serviceData!: Service;

  constructor(
    private route: ActivatedRoute,  
    private fb: FormBuilder,  
    private serverService: ServiceService,  
    private router: Router  
  ) { }

  ngOnInit(): void {
    // Obtener el ID del producto de la URL
    this.serviceId = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar el formulario
    this.ServiceForm = this.fb.group({
      nameservice: ['', [Validators.required]],
      serviceTypeId: ['', [Validators.required]],
      studentId: ['', [Validators.required]]
    });

    this.loadServiceData();
  }

  loadServiceData() {
    this.serverService.getServices().subscribe(data => {
      const service = data.find(p => p.id === this.serviceId);  // Encontrar el producto por ID
      if (service) {
        this.serviceData = service;
        this.ServiceForm.setValue({
          nameService: service.nameServices,
          idStudent : service.studentId, 
          serviceType : service.serviceTypeId
        });
      } else {
        console.error('Producto no encontrado');
      }
    });
  }

  updateService() {
    if (this.ServiceForm.invalid) {
      return;  
    }

    const updatedService: Service = {
      id: this.serviceId,
      ...this.ServiceForm.value  
    };

    this.serverService.updateService(this.serviceId, updatedService).subscribe({
     next: () => {
       console.log('service');
       this.router.navigate(['/service']);  // Redirigir a la lista de productos
     },
      error: err => {
        console.error('Error al actualizar el servicio:', err);
      }
    });
  }

}
