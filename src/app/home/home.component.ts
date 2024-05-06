import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts/accounts.service';
import { Router } from '@angular/router';
import { ActivityLogService } from '../activity-log.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  accounts!: any[];
  totalBalance!: number;
  accountTypeDistribution: any = {};
  branchSummary: any = {};

  // Declare Object
  Object = Object;

  
  constructor(
    private accountsService: AccountsService,
    private router: Router,
    private activityLogService: ActivityLogService
  ) {}

  ngOnInit(): void {
    this.accountsService.getAll().subscribe(accounts => {
      this.accounts = accounts;
      this.calculateTotalBalance();
      this.calculateAccountTypeDistribution();
      this.calculateBranchSummary();
    });
  }

  calculateTotalBalance(): void {
    if (this.accounts && this.accounts.length > 0) {
      this.totalBalance = this.accounts.reduce((total, account) => total + parseFloat(account.balance), 0);
    } else {
      this.totalBalance = 0;
    }
  }

  calculateAccountTypeDistribution(): void {
    this.accountTypeDistribution = {};
    if (this.accounts && this.accounts.length > 0) {
      this.accounts.forEach(account => {
        const accountType = account.acc_type;
        if (this.accountTypeDistribution.hasOwnProperty(accountType)) {
          this.accountTypeDistribution[accountType]++;
        } else {
          this.accountTypeDistribution[accountType] = 1;
        }
      });
    }
  }

  calculateBranchSummary(): void {
    this.branchSummary = {};
    if (this.accounts && this.accounts.length > 0) {
      this.accounts.forEach(account => {
        const branch = account.branch;
        if (this.branchSummary.hasOwnProperty(branch)) {
          this.branchSummary[branch].totalAccounts++;
          this.branchSummary[branch].totalBalance += parseFloat(account.balance);
        } else {
          this.branchSummary[branch] = {
            totalAccounts: 1,
            totalBalance: parseFloat(account.balance),
          };
        }
      });
    }
  }

  // Redirect to the list component to view activity logs
  viewActivityLogs(): void {
    this.router.navigate(['/logs']);
  }
}