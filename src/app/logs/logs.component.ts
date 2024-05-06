import { Component, OnInit } from '@angular/core';
import { ActivityLogService } from '../activity-log.service';
import { AccountsService } from '../accounts/accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit{

  activityLogs!: any[];

  constructor(
    private accountsService: AccountsService,
    private activityLogService: ActivityLogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.accountsService.getAll().subscribe(accounts => {
      this.fetchActivityLogs();
    });
  }

  fetchActivityLogs(): void {
    this.activityLogService.getActivityLogs().subscribe(
      logs => {
        this.activityLogs = logs;
      },
      error => {
        console.error('Error fetching activity logs:', error);
      }
    );
  }

  goBack(){
    this.router.navigate(['/'])
  }

}
