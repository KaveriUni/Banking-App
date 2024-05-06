import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityLogService {

  private activityLogUrl = 'http://localhost:3000/activityLogs'; // Update with your backend API endpoint

  constructor(private http: HttpClient) { }

  getActivityLogs(): Observable<any[]> {
    return this.http.get<any[]>(this.activityLogUrl);
  }
}
