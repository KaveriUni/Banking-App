import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountsService } from '../accounts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Accounts } from '../accounts';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  constructor(private fb: FormBuilder,
    private as: AccountsService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  updateForm!: FormGroup;
  account$!: Observable<Accounts>;
  accId!: number;

  ngOnInit() {

    this.accId = this.route.snapshot.params['id'];
    this.account$ = this.as.getOne(this.accId);

    this.updateForm = this.fb.group({
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
    return this.updateForm.controls;
  }

  updateAccount(){
    this.as.update(this.accId, this.updateForm.value).subscribe(data =>
      this.router.navigate(['/accounts'])
    );
    
  }
}
