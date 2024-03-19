import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table'
import { CommonModule } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTableModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {

  title = 'testAn';

}
