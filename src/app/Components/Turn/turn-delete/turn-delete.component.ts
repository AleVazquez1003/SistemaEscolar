import { Component, OnInit } from '@angular/core';
import { TurnService } from '../../../Services/turn.service';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { turn } from '../../../Data/interface/turn.model';


@Component({
  selector: 'app-turn-delete',
  imports: [RouterLink],
  templateUrl: './turn-delete.component.html',
  styleUrl: './turn-delete.component.css'
})
export class TurnDeleteComponent implements OnInit {

  turnId!: number;  // ID del producto a eliminar
  turnData!: turn;  // Datos del producto que se eliminará

  constructor(
    private turnService: TurnService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.turnId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadTurnData();
  }

  loadTurnData() {
    this.turnService.getById(this.turnId).subscribe(data => {
      const turn = data;
      if (turn) {
        this.turnData = turn;
      }
    })
  }

  deleteTurn(){
    this.turnService.deleteTurn(this.turnId).subscribe({
      next: () => {
        this.snackBar.open('Product successfully removed', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
            verticalPosition: 'top',
          panelClass: ['snack-bar-success']
        });
        this.router.navigate(['/turn']);
      }
    });
  }







}
