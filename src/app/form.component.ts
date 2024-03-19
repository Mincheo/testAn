import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DataService } from './data.service';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'form',
  styleUrls: ['./form.component.css'],
  templateUrl: './form.component.html',
  providers: [MatDatepickerModule],
  standalone: true,
  imports: [FormsModule, CommonModule,MatNativeDateModule, MatButtonModule, RouterModule, MatDatepickerModule, MatSelectModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule]
})

export class FormComponent {
  editedItem: any;
  statuses: any;
  shortdesc: FormControl;
  description: FormControl;
  createDate: FormControl;
  execDate: FormControl;
  status: FormControl;
  constructor(private route: ActivatedRoute, private dataService: DataService){
    const itemId = this.route.snapshot.params['id'];
    this.editedItem = this.dataService.getItemById(itemId);
    this.statuses = this.dataService.status_select;
    
    this.shortdesc = new FormControl(this.editedItem.shortdescription);
    this.description = new FormControl(this.editedItem.description);
    this.createDate = new FormControl(this.editedItem.datatime_create);
    this.execDate = new FormControl(this.editedItem.datatime_execute);
    this.status = new FormControl(this.statuses.find((x:any) => x.title == this.editedItem.status.title));
  }

  onSubmit() {
    this.editedItem.shortdescription = this.shortdesc.value
    this.editedItem.description = this.description.value
    this.editedItem.datatime_create = this.createDate.value
    this.editedItem.datatime_execute = this.execDate.value
    this.editedItem.status = this.status.value
    this.dataService.updateItem(this.editedItem);
  }
}
