import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProfessorService } from '../../../Services/professor.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-professor-create',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './professor-create.component.html',
  styleUrl: './professor-create.component.css'
})
export class ProfessorCreateComponent implements OnInit
{
  productForm!: FormGroup;

  constructor(private readonly ProfessorService: ProfessorService, private readonly formBuilder: FormBuilder,
              private readonly router: Router)
  {

  }

  ngOnInit(): void
  {
    //Inicializar el formulario con un grupo de controles
    this.productForm = this.formBuilder.group
    ({
      nameProfessor: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      lastNameProfessor: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      emailProfessor: ['', [Validators.required]],
      degree: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    })
  }

  async enviarFormulario() 
  {
    this.productForm.markAllAsTouched();
  
    if (this.productForm.invalid) 
    {
      return;
    }
    const professorData = this.productForm.value;
    try 
    {
      // Esperar la respuesta del servicio
      const response = await this.ProfessorService.CreateProfessor(professorData).toPromise();
      // Si la respuesta es exitosa, muestra un Swal de éxito
      Swal.fire({
        title: '¡Éxito!',
        text: 'Profesor fue creado correctamente.',
        icon: 'success',
        timer: 1800,
        showConfirmButton: false
      }).then(() => 
      {
        // Redirige a la lista de profesores después de la confirmación
        this.router.navigate(['/Professor']);
      });
    } 
    catch (error) 
    {
      // Si ocurre un error, muestra un Swal de error
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al crear el profesor.',
        icon: 'error',
        timer: 1800,
        showConfirmButton: false
      });
      console.log("Error al crear el profesor:", error);
    }
  }
}
