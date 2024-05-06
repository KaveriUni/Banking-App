import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Accounts } from '../accounts';
import { AccountsService } from '../accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  
  //declare local observable<accounts[]>
  accounts$: Observable<Accounts[]> = new Observable<Accounts[]>;

  constructor(private as: AccountsService,
              private router: Router
  ){}

  ngOnInit() {
    this.accounts$ = this.as.getAll();
  }

  deleteAccount(id: number){
    this.as.delete(id).subscribe(data =>{
      this.accounts$ = this.as.getAll()
      this.router.navigate(['/accounts'])
    }
    );
    
  }
}
