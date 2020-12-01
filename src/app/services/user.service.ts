import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISingleUser } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  user(id: number) {
    return this.http.get<ISingleUser>(`${environment.URI}/users/${id}`)
  }
  users(page: number) {
    return this.http.get<ISingleUser>(`${environment.URI}/users/?page${page}`)
  }



}
