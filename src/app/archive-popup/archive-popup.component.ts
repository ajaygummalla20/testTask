import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-archive-popup',
  standalone: true,
  imports: [],
  templateUrl: './archive-popup.component.html',
  styleUrl: './archive-popup.component.scss'
})
export class ArchivePopupComponent {
 constructor( public dialogRef: MatDialogRef<ArchivePopupComponent>){ 
  
 }
}
