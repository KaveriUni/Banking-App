import { Component, OnInit } from '@angular/core';
import { Accounts } from '../accounts';
import { Observable } from 'rxjs';
import { AccountsService } from '../accounts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  
  account$!: Observable<Accounts>;
  accId!: number;

  constructor(private as: AccountsService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  goBack(){
    this.router.navigate(['/accounts'])
  }

  ngOnInit(){
    this.accId = this.route.snapshot.params['id'];
    this.account$ = this.as.getOne(this.accId);
  }
}
