import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceCartService {

  constructor(private http:HttpClient) { }



  getNewCart(model:any){
    return this.http.post(environment.baseApi + 'carts', model);
  }
}
