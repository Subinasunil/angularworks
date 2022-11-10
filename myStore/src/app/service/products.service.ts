import { Injectable } from '@angular/core';
import { find } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  getProducts(){
    return fetch(`https://fakestoreapi.com/products`)
  }
  getProductDetail(id:any){
    return fetch(`https://fakestoreapi.com/products/${id}/`)
  }
  getCategories(){
    return fetch(`https://fakestoreapi.com/products/categories`)
  }
  getProductByCategoryname(name:string){
    return fetch(`https://fakestoreapi.com/products/category/jewelery`)
  }
  constructor() { }
}
