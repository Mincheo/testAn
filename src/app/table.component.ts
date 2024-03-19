import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { CommonModule } from "@angular/common";
import { Router } from '@angular/router';
import { DataService } from './data.service';



@Component({
  selector: 'table-app',
  standalone: true,
  imports: [MatTableModule,CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './app.component.css',
  providers:[]
})



export class TableComponent {
    constructor(private router: Router, private dataService: DataService) {}
    displayedColumns: string[] = ['status', 'shortdescription', 'datatime_create', 'datatime_execute'];
  items = this.dataService.items;
  

  editItem(id: number) {
    this.router.navigate(['/edit', id]);
  }
}
