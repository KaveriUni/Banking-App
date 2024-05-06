import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Accounts } from './accounts';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  apiUrl = "http://localhost:3000"
  private activityLogUrl = 'http://localhost:3000/activityLogs';
  
  constructor(private http: HttpClient) { }

  //CRUD Operations

  // Read All
  getAll(): Observable<Accounts[]>{
    return this.http.get<Accounts[]>(`${this.apiUrl}/accounts`)
  }

  //Read One
  getOne(id: number): Observable<Accounts>{
    return this.http.get<Accounts>(`${this.apiUrl}/accounts/${id}`)
    }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  //Create Record
  insert(account: Accounts): Observable<Accounts>{
    return this.http.post<Accounts>(`${this.apiUrl}/accounts`,
                                    JSON.stringify(account),
                                    this.httpOptions).pipe(
                                      tap(() => this.logActivity('Account added'))
                                    );;
  }

  //Update Record
  update(id: number, accounts: Accounts): Observable<Accounts>{
    return this.http.put<Accounts>(`${this.apiUrl}/accounts/${id}`,
                                    JSON.stringify(accounts),
                                  this.httpOptions).pipe(
                                    tap(() => this.logActivity('Account updated'))
                                  );;

  }

  //Delete Record
 delete(id: number): Observable<Accounts>{
    return this.http.delete<Accounts>(`${this.apiUrl}/accounts/${id}`).pipe(
      tap(() => this.logActivity('Account deleted'))
    );
 }
 // Log activity
 private logActivity(action: string): void {
  const logData = {
    action: action,
    timestamp: new Date().toISOString()
  };
  this.http.post<any>(this.activityLogUrl, logData).subscribe(
    () => console.log('Activity logged'),
    error => console.error('Error logging activity:', error)
  );
}
}
