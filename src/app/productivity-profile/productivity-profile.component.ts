import { Component,Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartSearchComponent } from '@snovasys/snova-tailwind-uikit';
import { SmartButtonComponent } from '@snovasys/snova-tailwind-uikit';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatTooltipModule} from '@angular/material/tooltip';
import { PopupsComponent } from '../popups/popups.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-productivity-profile',
  standalone: true,
  imports: [CommonModule,SmartSearchComponent,SmartButtonComponent,MatPaginatorModule,MatFormField,FormsModule,ReactiveFormsModule,MatIcon,MatTooltipModule],
  templateUrl: './productivity-profile.component.html',
  styleUrl: './productivity-profile.component.scss',
})
export class ProductivityProfileComponent {
  items = [
    { name: 'asdasds' },
    { name: 'fvgr' },
    { name: 'vitest1' },
    { name: 'vitest125' },
    { name: 'fdg' },
    { name: 'asdsadas' },
    { name: 'test123' },
    { name: 'helloWorld' },
    { name: 'angularDev' },
    { name: 'typescriptPro' },
    { name: 'javascriptMaster' },
    { name: 'reactExpert' },
    { name: 'vueJsPro' },
    { name: 'nodeJsDev' },
    { name: 'expressJsPro' },
    { name: 'mongodbPro' },
    { name: 'graphqlExpert' },
    { name: 'restApiPro' },
    { name: 'fullStackDev' },
    { name: 'softwareEngineer' }
  ];
  itemsBackup = this.items;
  tabs = [{name:'Application Groups',selected:true},{name:'Teams',selected:false},{name:'Users',selected:false}]
  columns = [{columnKey:'apGropup',columnName:'Application Group'},{columnKey:'idleTime',columnName:'Idle Time Configuration'}]
  data = [
    { name: 'asdasds', type: 'default', productive: true },
    { name: 'fvgr', type: 'default', productive: false },
    { name: 'vitest1', type: 'default', productive: true },
    { name: 'vitest125', type: 'default', productive: false },
    { name: 'fdg', type: 'default', productive: true },
    { name: 'asdsadas', type: 'default', productive: false },
    { name: 'test123', type: 'default', productive: true },
    { name: 'helloWorld', type: 'default', productive: false },
    { name: 'angularDev', type: 'default', productive: true },
    { name: 'typescriptPro', type: 'default', productive: false },
    { name: 'javascriptMaster', type: 'default', productive: true },
    { name: 'reactExpert', type: 'default', productive: false },
    { name: 'vueJsPro', type: 'default', productive: true },
    { name: 'nodeJsDev', type: 'default', productive: false },
    { name: 'expressJsPro', type: 'default', productive: true },
    { name: 'mongodbPro', type: 'default', productive: false },
    { name: 'graphqlExpert', type: 'default', productive: true },
    { name: 'restApiPro', type: 'default', productive: false },
    { name: 'fullStackDev', type: 'default', productive: true },
    { name: 'softwareEngineer', type: 'default', productive: false }
  ];
  teamData = [{name:'a1',selected:false},{name:'a19',selected:false},{name:'team test',selected:false}]
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  pageSize = 10; // Initial page size
  pageSizeOptions = [5, 10, 20, 50];
  showFirstLastButtons = true;

  constructor(private dailog:MatDialog) {
    this.dataSource = new MatTableDataSource(this.data.slice(0, this.pageSize));
    
    }
  
  changeConfigureTabs(name:any){
    this.tabs.forEach(x =>{
      if(name === x.name){
        x.selected = true;
      }else{
        x.selected = false;
      }
    })
    if(this.tabs[0].selected){
      this.dataSource = new MatTableDataSource(this.data.slice(0, this.pageSize));
    }else{
      this.dataSource = new MatTableDataSource(this.items.slice(0, this.pageSize));
    }
  }
  handleValueChange(event:any){
    console.log(event)
  }
  p = 1;
  paginate(event: any,tab:any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    if(tab === 'tab1'){
      this.dataSource.data = this.data.slice(startIndex,endIndex)
    }else{
      this.dataSource.data = this.items.slice(startIndex, endIndex);
    }
  }
  changeActive(type:any,item:any){
    if(type === 'active'){
      item.productive = true
    }else{
      item.productive = false
    }
  }
  filterData(event:any){
    if(event.target.value.length >0){
      let fileterdData = this.items.filter(x => x.name.includes(event.target.value))
      this.items = fileterdData
    }else{
      this.items = this.itemsBackup;
    }
  }
  editProdctivity(item:any){
let popDailog = this.dailog.open(PopupsComponent,{
  data:{type:'edit',name:item.name}
})

popDailog.afterClosed().subscribe(res =>{
  item.name = res
})
  }
  deleteActivity(item:any){
    let dailodata = this.dailog.open(PopupsComponent,{
      data:{type:'delete',name:item.name}
    })
    dailodata.afterClosed().subscribe(res => {
      let index = this.items.findIndex(x => x.name === item.name)
      if(index >-1){
        this.items.splice(index,1)
      }
    })
  }

}
