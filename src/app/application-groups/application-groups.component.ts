import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { PopupsComponent } from '../popups/popups.component';
import { ArchivePopupComponent } from '../archive-popup/archive-popup.component';

@Component({
  selector: 'app-application-groups',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule, MatIconModule],
  templateUrl: './application-groups.component.html',
  styleUrl: './application-groups.component.scss',
})
export class ApplicationGroupsComponent {
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  pageSize = 10; // Initial page size
  pageSizeOptions = [5, 10, 20, 50];
  showFirstLastButtons = true;
  items = [
    {
      name: 'a15',
      size: 0,
      date: 'Dec 27, 2024',
    },
    {
      name: 'a16',
      size: 0,
      date: 'Dec 27, 2024',
    },
    {
      name: 'a17',
      size: 0,
      date: 'Dec 27, 2024',
    },
    {
      name: 'a18',
      size: 1,
      date: 'Dec 27, 2024',
    },
    {
      name: 'a19',
      size: 0,
      date: 'Dec 27, 2024',
    },
    {
      name: 'a2',
      size: 0,
      date: 'Dec 27, 2024',
    },
    {
      name: 'a3',
      size: 0,
      date: 'Dec 27, 2024',
    },
    {
      name: 'a4',
      size: 0,
      date: 'Dec 27, 2024',
    },
    {
      name:'dev',
      size:2,
      date:'Dec 27, 2024'
    },
    {
      name:'sales',
      size:2,
      date:'Dec 27, 2024'
    },
    {
      name:'team test',
      size:4,
      date:'Dec 27, 2024'
    }
  ];

  constructor(private dailog: MatDialog) {}
  openEdit(item: any) {
    let dailog = this.dailog.open(PopupsComponent, {
      width: '80%',
      height: '90vh',
      data: { type: 'edit', name: item.name },
    });
  }
  openArchieve() {
    let dailog = this.dailog.open(ArchivePopupComponent, {
      width: '262px',
      height: '134px',
    });
  }
}
