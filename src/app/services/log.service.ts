import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserCredential } from '../interface/user';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClient) { }



  log(credential: IUserCredential) {
    return this.http.post<{ token: string }>(`${environment.URI}/login`, credential)
  }
}
