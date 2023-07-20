import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiscService {
  private apiUrl = 'https://localhost:44345/Discs'; 

  constructor(private http: HttpClient) {}


  returnDiscs(): Observable<any> {
    return this.http
      .get<any>(this.apiUrl)
  }

  addDisc(discData: any): Observable<any> {
    console.log(discData)
    return this.http.post<any>(this.apiUrl, discData)
  }

  deleteDisc(discId: number): Observable<any> {
    console.log(discId)
    return this.http.delete<any>(this.apiUrl +'/'+ + discId)
  }



}

