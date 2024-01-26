import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceProductsService {

  constructor( private http: HttpClient) { }


  getProducts(){
    return this.http.get(environment.baseApi + 'products');
  }

  getCategories(){
    return this.http.get(environment.baseApi + 'products/categories');
  }

  getFilterByCategories(keyWord : any){
    return this.http.get(environment.baseApi + 'products/category/'+keyWord);
  }


  getProductsById(id : any){
    return this.http.get(environment.baseApi + 'products/'+id);
  }
}
