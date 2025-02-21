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
import { ProductivityProfileComponent } from './productivity-profile/productivity-profile.component';
import { MappingComponent } from "./mapping/mapping.component";
import { ApplicationGroupsComponent } from "./application-groups/application-groups.component";


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
    CommonModule, ProductivityProfileComponent, MappingComponent, ApplicationGroupsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-project';
  tabs = [{name:'Trends',selected:false},{name:'Time Line',selected:false},{name:'Configure Apps',selected:true}]
  tabs2 = [{name:'Productivity Profile',selected:true},{name:'Mapping',selected:false},{name:'Application Groups',selected:false}]

  changeTab(name:any){
    this.tabs.forEach(x => {
      if(x.name === name){
        x.selected = true;
      }else{
        x.selected = false;
      }
    })
  }
  changeConfigureTabs(name:any){
    this.tabs2.forEach(x =>{
      if(name === x.name){
        x.selected = true;
      }else{
        x.selected = false;
      }
    })
  }
}
