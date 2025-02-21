import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';

interface DialogData {
  profileName: string;
}
@Component({
  selector: 'app-popups',
  standalone: true,
  imports: [ CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
    ],
  templateUrl: './popups.component.html',
  styleUrl: './popups.component.scss'
})
export class PopupsComponent {
  profileName: string = '';
  type='';
  constructor( public dialogRef: MatDialogRef<PopupsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      this.profileName = data.name;
      this.type = data.type;
  }
 
  closePopup(){
    this.dialogRef.close(this.profileName)
  }
  


}
