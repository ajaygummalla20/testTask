import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    MatDialogModule
    ],
  templateUrl: './popups.component.html',
  styleUrl: './popups.component.scss'
})
export class PopupsComponent {
  profileName: string = '';
  type='';
  tabs2 = [{name:'Team Details',selected:true},{name:'Team Configuration',selected:false},{name:'working hours',selected:false},{name:'Targets',selected:false},{name:'Holidys',selected:false},{name:'Recording Configuration',selected:false}]

  constructor( public dialogRef: MatDialogRef<PopupsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
      this.profileName = data.name;
      this.type = data.type;
  }
 
  closePopup(){
    this.dialogRef.close(this.profileName)
  }
  


}
