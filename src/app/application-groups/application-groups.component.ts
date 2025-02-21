import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-application-groups',
  standalone: true,
  imports: [CommonModule,MatPaginatorModule,MatIconModule],
  templateUrl: './application-groups.component.html',
  styleUrl: './application-groups.component.scss'
})
export class ApplicationGroupsComponent {
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
    pageSize = 10; // Initial page size
    pageSizeOptions = [5, 10, 20, 50];
    showFirstLastButtons = true;
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
}
