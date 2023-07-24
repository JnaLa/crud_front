import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PuttingPractiseService {
  private apiUrl = 'http://localhost:5293/PuttingPractises'; 

  constructor(private http: HttpClient) {}


  returnPuttingPractise(): Observable<any> {
    return this.http
      .get<any>(this.apiUrl)
  }

  addPuttingPractise(puttingPractiseData: any): Observable<any> {
    console.log(puttingPractiseData)
    return this.http.post<any>(this.apiUrl, puttingPractiseData)
  }
  /*
  deleteDisc(discId: number): Observable<any> {
    console.log(discId)
    return this.http.delete<any>(this.apiUrl +'/'+ + discId)
  }
  */


}
