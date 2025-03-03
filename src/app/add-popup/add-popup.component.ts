import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-popup',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './add-popup.component.html',
  styleUrl: './add-popup.component.scss'
})
export class AddPopupComponent {

  constructor(public dialogRef: MatDialogRef<AddPopupComponent>) { 
    let elements = document.getElementsByClassName('custom-dialog-container')
    if (elements.length > 0) {
      let element = elements[0] as HTMLElement;
      element.style.marginTop = '15% !important'; // Example of applying a style
      element.style.marginRight = '54% !important';
    }
    console.log(elements)
    }

}
