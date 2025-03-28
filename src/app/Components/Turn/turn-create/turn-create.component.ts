import { Component, OnInit } from '@angular/core';
import { TurnService } from '../../../Services/turn.service';
import { CommonModule } from '@angular/common';
import { FormGroup,FormBuilder,Validator,ReactiveFormsModule, Validators} from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; 
import { response } from 'express';
import { turn} from '../../../Data/interface/turn.model';
import { start } from 'repl';


@Component({
  selector: 'app-turn-create',
  imports: [CommonModule, RouterModule,ReactiveFormsModule],
  templateUrl: './turn-create.component.html',
  styleUrl: './turn-create.component.css'
})

export class TurnCreateComponent implements OnInit {
    
      TurnForm!: FormGroup;  // declaración del formulario reactivo como FormGroup

      constructor(private readonly TurnService: TurnService, private readonly formBuilder: FormBuilder, private readonly router: Router){}

        // the ngOnInit method is a lifecycle that runs when the component is initialized
      ngOnInit(): void 
      {
        // initialize the form with a group of controls
        this.TurnForm = this.formBuilder.group({
          nameTurn: ['',[Validators.required]],
          startHour: ['',[Validators.required]],
          endHour: ['',[Validators.required]],
        });
      }

      //send form 
      enviarFormulario(){
        this.TurnForm.markAllAsTouched();
        if(this.TurnForm.invalid){
          return;     // No enciar el comentario si es invalido
        }
    
        const TurnData = this.TurnForm.value;
    
        // llamar al servicio para enviar los datos del producto 
        this.TurnService.postTurn(TurnData).subscribe({
              next: response => {
                this.router.navigate(['/turn']) // redirigir a la lista de productos
              }, 
              error: err => {
                console.log("Error al crear producto", err); // mensaje de error 
              }
        });
    
    
    
      }






}
