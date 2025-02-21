import { Component } from '@angular/core';
import { CommonModule, formatCurrency } from '@angular/common';
import { matMenuAnimations, MatMenuModule } from '@angular/material/menu';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-mapping',
  standalone: true,
  imports: [CommonModule,MatMenuModule,FormsModule,ReactiveFormsModule],
  templateUrl: './mapping.component.html',
  styleUrl: './mapping.component.scss'
})
export class MappingComponent {
  searchQuery: string = '';
  isAppFilter: any = 'Show All'; 
  groupConfigFilter: any = 'All'; 
  applicationGroupFilter: any = ''; 
  regexFilter: string = '';
  tableData = [
    { app: 'APP', name: 'vitestl' },
    { app: 'APP', name: 'wee' },
    { app: 'APP', name: 'btrak' },
    { app: 'URL', name: 'btrak10006-qa.snovasys.com', description: 'wee' },
    { app: 'URL', name: 'btrak434-development.snovasys.com', description: 'Whatsapp' },
    { app: 'URL', name: 'btrak5254-development.snovasys.com', description: 'Office Apps' },
    { app: 'URL', name: 'btrak5255-development.snovasys.com', description: 'Social Media' },
    { app: 'APP', name: 'vitestl' },
    { app: 'APP', name: 'wee' },
    { app: 'APP', name: 'btrak' },
    { app: 'URL', name: 'btrak10006-qa.snovasys.com', description: 'wee' },
    { app: 'URL', name: 'btrak434-development.snovasys.com', description: 'Whatsapp' },
    { app: 'URL', name: 'btrak5254-development.snovasys.com', description: 'Office Apps' },
    { app: 'URL', name: 'btrak5255-development.snovasys.com', description: 'Social Media' },
  ];
  dropdownOptions:any = [];
}
