import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router'; 
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators }from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Justifications } from '../../../Data/interface/Justifications.model';
import { JustificationService } from '../../../Services/justification.service';



@Component({
  selector: 'app-justification-update',
  imports: [],
  templateUrl: './justification-update.component.html',
  styleUrl: './justification-update.component.css'
})
export class JustificationUpdateComponent implements OnInit{

  justificacionForm!: FormGroup;  // Formulario reactivo
  justificationId!: number;  // ID del producto a actualizar
  justificationData!: Justifications;  // Datos del producto que se editarán

  constructor(
    private route: ActivatedRoute,  // Para acceder a los parámetros de la URL
    private fb: FormBuilder,  // Para crear el formulario reactivo
    private justificationService: JustificationService,  // Servicio para interactuar con la API
    private router: Router  // Para redirigir al usuario después de la actualización
  ) { }

  ngOnInit(): void {
    // Obtener el ID del producto de la URL
    this.justificationId = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar el formulario
    this.justificacionForm = this.fb.group({
      dateJustification:   ['',[Validators.required]],
      reason:  ['',[Validators.required]],
    });

    // Cargar los datos del producto para editar
    this.loadJustificationsData();
  }

   // Cargar los datos del producto desde la API
   loadJustificationsData() {
    this.justificationService.getJustifications().subscribe(data => {
      const justification = data.find(p => p.id === this.justificationId);  // Encontrar el producto por ID
      if (justification) {
        this.justificationData = justification;
        this.justificacionForm.setValue({

          dateJustificatios: justification.dateJustification,
          reason: justification.reason
        });
      } else {
        console.error('Justifications not found');
      }
    });
  }

  // Enviar el formulario para actualizar el producto
  updateJustification() {
    if (this.justificacionForm.invalid) {
      return;  // No enviar si el formulario es inválido
    }

    const updatedJustification: Justifications = {
      id: this.justificationId,
      ...this.justificacionForm.value  // Obtener los datos actualizados del formulario
    };

    this.justificationService.updateJustifications(this.justificationId, updatedJustification).subscribe({
      next: () => {
        console.log('justification actualizado');
        this.router.navigate(['/justification']);  // Redirigir a la lista de productos
      },
      error: err => {
        console.error('Error al actualizar la justification:', err);
      }
    });
  }




}
