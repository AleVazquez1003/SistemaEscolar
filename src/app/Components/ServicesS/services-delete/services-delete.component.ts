import { Component, OnInit} from '@angular/core';
import { ServiceService } from '../../../Services/service.service';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Services } from '../../../Data/interface/Service.model'; 
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-services-delete',
  imports: [],
  templateUrl: './services-delete.component.html',
  styleUrl: './services-delete.component.css'
})
export class ServicesDeleteComponent implements OnInit {

  servicestId!: number;  
  servicesData!: Services; 

  constructor(
    private ServicesService:ServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ){}


  ngOnInit(): void {
    this.servicestId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadServiceData();
}

loadServiceData(){
  this.ServicesService.getById(this.servicestId).subscribe( data => {
    const service = data;
    if(service){
      this.servicesData = service;
    }
  })
}

deleteProduct(){
  this.ServicesService.deleteService(this.servicestId).subscribe({
    next: () => {
      this.snackBar.open('service', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'center',
          verticalPosition: 'top',
        panelClass: ['snack-bar-success']
      });
      this.router.navigate(['/service']);
    }
  });
}




}
