import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationGroupsComponent } from "./application-groups/application-groups.component";
import { AddPopupComponent } from './add-popup/add-popup.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    CommonModule, ApplicationGroupsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-project';
  tabs = [{name:'Trends',selected:false},{name:'Time Line',selected:false},{name:'Configure Apps',selected:true}]
  constructor(private dailog:MatDialog){}
  changeTab(name:any){
    this.tabs.forEach(x => {
      if(x.name === name){
        x.selected = true;
      }else{
        x.selected = false;
      }
    })
  }
  openDialog(){
  let dailog = this.dailog.open(AddPopupComponent,{
    width:'400px',
    height:'213px',
    panelClass: 'custom-dialog-container'
  })
  }
 
}
