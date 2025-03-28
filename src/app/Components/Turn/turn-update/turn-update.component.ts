import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';  // Para obtener parámetros de la URL
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';  // Para manejar el formulario reactivo
import { TurnService } from '../../../Services/turn.service';
import { turn } from '../../../Data/interface/turn.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-turn-update',
  imports: [],
  templateUrl: './turn-update.component.html',
  styleUrl: './turn-update.component.css'
})

export class TurnUpdateComponent implements OnInit {
  TurnForm!: FormGroup;  // Reactive form
  turnId!: number;  // turn ID to update 
  turnData!: turn;  // // turn data to be edited

  constructor(
    private route: ActivatedRoute,  // To access the URL parameters
    private fb: FormBuilder,  // To create the reactive form
    private turnService: TurnService,  // Service to interact with the API
    private router: Router // To redirect the user after the update
  ) { }


  ngOnInit(): void {
    // Get the turn ID from the URL
    this.turnId = Number(this.route.snapshot.paramMap.get('id'));

    // Initialize the form
    this.TurnForm = this.fb.group({
      nameTurn: ['', [Validators.required]],
      startHour: ['', [Validators.required]],
      endHour: ['', [Validators.required]],
    });

    // Load turn data for editing
    this.loadTurnData();
  }

  // Load turn data from the API
  loadTurnData() {
    this.turnService.getListTurn().subscribe(data => {
      const turn = data.find(p => p.id === this.turnId); // Find the turn by ID
      if (turn) {
        this.turnData = turn;
        this.TurnForm.setValue({
          nameTurn: turn.nameTurn,
          startHour: turn.startHour,
          endHour: turn.endHour

        });
      } else {
        console.error(' Turn not found');
      }
    });
  }

  // Enviar el formulario para actualizar el producto
  updateTurn() {
    if (this.TurnForm.invalid) {
      return;  // No enviar si el formulario es inválido
    }

    const updatedProduct: turn = {
      id: this.turnId,
      ...this.TurnForm.value  // Obtener los datos actualizados del formulario
    };

    this.turnService.updateTurn(this.turnId, updatedProduct).subscribe({
      next: () => {
        console.log('Turn update');
        this.router.navigate(['/turn']);  // Redirigir a la lista de productos
      },
      error: err => {
        console.error('Error updating the product:', err);
      }
    });
  }
}
