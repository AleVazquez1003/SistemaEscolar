import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';  // Para obtener parámetros de la URL
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';  // Para manejar el formulario reactivo
import { ServiceTypeService } from '../../../Services/service-type.service';  // Servicio para interactuar con la API
import { servicetype } from '../../../Data/interface/servicetype.model';  // Interfaz del producto
import { CommonModule } from '@angular/common';    // Importa CommonModule que es necesario para algunas funcionalidades 

@Component({
  selector: 'app-servicetype-update',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './service-type-list.component.html',
  styleUrls: ['./service-type-list.component.css']
})
export class ServiceTypeUpdateComponent implements OnInit {
  servicetypeForm!: FormGroup;  // Formulario reactivo
  servicetypeId!: number;  // ID del producto a actualizar
  servicetypeData!: servicetype;  // Datos del producto que se editarán

  constructor(
    private route: ActivatedRoute,  // Para acceder a los parámetros de la URL
    private fb: FormBuilder,  // Para crear el formulario reactivo
    private serviceTypeService: ServiceTypeService,  // Servicio para interactuar con la API
    private router: Router  // Para redirigir al usuario después de la actualización
  ) { }

  ngOnInit(): void {
    // Obtener el ID del producto de la URL
    this.servicetypeId = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar el formulario
    this.servicetypeForm = this.fb.group({
      nameServiceType: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]]
    });

    // Cargar los datos del producto para editar
    this.loadServiceTypeData();
  }

  // Cargar los datos del producto desde la API
  loadServiceTypeData() {
    this.serviceTypeService.getServiceTypes().subscribe(data => {
      const serviceType = data.find(p => p.id === this.servicetypeId);  // Encontrar el producto por ID
      if (serviceType) {
        this.servicetypeData = serviceType;
        this.servicetypeForm.setValue({
          nameServiceType: serviceType.nameServiceType,
          description: serviceType.description
        });
      } else {
        console.error('Producto no encontrado');
      }
    });
  }

  // Enviar el formulario para actualizar el producto
  updateServiceTypes() {
    if (this.servicetypeForm.invalid) {
      return;  // No enviar si el formulario es inválido
    }

    const updatedServiceTypes: servicetype = {
      id: this.servicetypeId,
      ...this.servicetypeForm.value  // Obtener los datos actualizados del formulario
    };

    this.serviceTypeService.updateServiceTypes(this.servicetypeId, updatedServiceTypes).subscribe({
      next: () => {
        console.log('Service Type edit');
        this.router.navigate(['/serviceTypes']);  // Redirigir a la lista de productos
      },
      error: err => {
        console.error('Error al actualizar el service Type:', err);
      }
    });
  }
}

