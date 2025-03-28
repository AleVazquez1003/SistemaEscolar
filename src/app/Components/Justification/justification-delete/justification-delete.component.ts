import { Component, OnInit} from '@angular/core';
import { JustificationService } from '../../../Services/justification.service';
import { Justifications } from '../../../Data/interface/Justifications.model';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-justification-delete',
  imports: [RouterLink],
  templateUrl: './justification-delete.component.html',
  styleUrl: './justification-delete.component.css'
})
export class JustificationDeleteComponent implements OnInit {

  justificationId!: number;  
  justificationData!: Justifications; 
  
  
  constructor(
    private justificationService:JustificationService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.justificationId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadJustificationData();
  }

  loadJustificationData(){
    this.justificationService.getById(this.justificationId).subscribe( data => {
      const just = data;
      if(just){
        this.justificationData = just;
      }
    })
  }

  deleteJustification(){
    this.justificationService.deleteJustifications(this.justificationId).subscribe({
      next: () => {
        this.snackBar.open('Justification Eliminated', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
            verticalPosition: 'top',
          panelClass: ['snack-bar-success']
        });
        this.router.navigate(['/justification']);
      }
    });
  }
}
