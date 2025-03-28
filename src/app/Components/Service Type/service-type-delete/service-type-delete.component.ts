import { Component, OnInit } from '@angular/core';
import { ServiceTypeService } from '../../../Services/service-type.service';  // Servicio para interactuar con la API
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { servicetype } from '../../../Data/interface/servicetype.model'; // Interfaz del producto
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-servicetype-delete',
  imports: [RouterLink],
  templateUrl: './service-type-delete.component.html',
  styleUrl: './service-type-delete.component.css'
})
export class ServiceTypeDeleteComponent implements OnInit {
  servicetypeId!: number;  // ID del producto a eliminar
  servicetypeData!: servicetype;  // Datos del producto que se eliminará

  constructor(
    private ServiceTypeService: ServiceTypeService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
      this.servicetypeId = Number(this.route.snapshot.paramMap.get('id'));
      this.loadServiceTypeData();
  }

  loadServiceTypeData(){
    this.ServiceTypeService.getById(this.servicetypeId).subscribe( data => {
      const serviceType = data;
      if(serviceType){
        this.servicetypeData = serviceType;
      }
    })
  }

  deleteServiceType(){
    this.ServiceTypeService.deleteServiceTypes(this.servicetypeId).subscribe({
      next: () => {
        this.snackBar.open('Service Type eliminado con éxito', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
            verticalPosition: 'top',
          panelClass: ['snack-bar-success']
        });
        this.router.navigate(['/serviceTypes']);
      }
    });
  }

}
