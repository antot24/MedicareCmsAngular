import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacistService } from 'src/app/services/pharmacist.service';
import { NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pharmacists-add',
  templateUrl: './pharmacists-add.component.html',
  styleUrls: ['./pharmacists-add.component.scss']
})
export class PharmacistsAddComponent implements OnInit {

  constructor(public pharmacistService:PharmacistService,
    private router:Router,private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    
  }
  //submit form
  onSubmit(form:NgForm){
    console.log(form.value);
    this.addMedicine(form);

  }
  //call insert method
  addMedicine(form?:NgForm){
    console.log("Inserting");
    this.pharmacistService.insertMedicine(form.value)
    .subscribe(
      (response)=>{
        console.log(response);
        this.toastr.success("Medicine added succesfully");
        form.reset();
        window.location.href='pharmacist/list'
      },
      (error)=>{
        console.log(error);
        this.toastr.error('oops!something went wrong ,try again');
      }
    )
  }
  

}
