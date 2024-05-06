import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountsService } from '../accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  constructor(private fb: FormBuilder,
    private as: AccountsService,
    private router: Router
  ){}

  addForm!: FormGroup;

  ngOnInit() {
    this.addForm = this.fb.group({
    name: ['', { 
      Validators: [Validators.required]
    }],
    acc_number: ['', { 
      Validators: [Validators.required, Validators.min(11)]
    }],
    acc_type: ['', { 
      Validators: [Validators.required]
    }],
    balance: ['', { 
      Validators: [Validators.required]
    }],
    address: ['', { 
      Validators: [Validators.required]
    }],
    phone: ['', { 
      Validators: [Validators.required, Validators.min(10)]
    }],
    ifsc: ['', { 
      Validators: [Validators.required, Validators.min(11)]
    }],
    branch: ['', { 
      Validators: [Validators.required]
    }]
  });
}
  get f(){
    return this.addForm.controls;
  }

  addAccount(){
    this.as.insert(this.addForm.value).subscribe(data => {
      this.router.navigate(['accounts'])
    })
  }
}
