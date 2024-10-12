import { Component } from '@angular/core';
import { hgsTypes } from '../shared/models/models';
import { TypesService } from '../hgsTypeServices/types.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hgs-types',
  templateUrl: './hgs-types.component.html',
  styleUrls: ['./hgs-types.component.scss']
})
export class HgsTypesComponent {
  addGrievanceMessage: string | undefined;
  constructor(private hgsTypes: TypesService) {}

  ngOnInit(): void {}

  submit(data: hgsTypes, form: NgForm) {
    this.hgsTypes.addGrievance(data).subscribe((result) => {
      if (result) {
        this.addGrievanceMessage = 'Grievance is Submitted successfully';
      }
    });
    setTimeout(() => {
      this.addGrievanceMessage=undefined
    }, 2000);
    form.reset(); 
  }

}
