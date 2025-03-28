import { Component, OnInit } from '@angular/core';
import { Assignment } from '../../../Data/interface/Assignment.model';
import { AssignmentService } from '../../../Services/assignment.service';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-asignment-delete',
  imports: [RouterLink],
  templateUrl: './asignment-delete.component.html',
  styleUrl: './asignment-delete.component.css'
})
export class AsignmentDeleteComponent implements OnInit {

  assingnmentId! : number;
  assingnmentData! : Assignment;

  constructor(
    private assingnmentservice : AssignmentService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.assingnmentId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadAssignmentData();
  }

  loadAssignmentData(){
    this.assingnmentservice.getById(this.assingnmentId).subscribe( data => {
      const assignment = data;
      if(assignment){
        this. assingnmentData = assignment;
      }
    })
  }

  deleteAssignment(){
    this.assingnmentservice.deleteAssignment(this.assingnmentId).subscribe({
      next: () => {
        this.snackBar.open('assignment deleted successfully', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
            verticalPosition: 'top',
          panelClass: ['snack-bar-success']
        });
        this.router.navigate(['/products']);
      }
    });
  }




}
