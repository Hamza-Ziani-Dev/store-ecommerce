import { Component, OnInit } from '@angular/core';
import { ServiceProductsService } from './services/service-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products : any;
categories : any;
cartProducts : any[] = [];
loading:boolean = false;
addButton: boolean = false;
amount: number = 0;  // Assuming you have declared 'amount' in your component
toggleAddButton() {
    this.addButton = !this.addButton;
}
  constructor(private serviceProducts : ServiceProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
    // this.getFilterByCategories();
  }


  getProducts(){
    this.loading = true,
    this.serviceProducts.getProducts().subscribe((res)=>{
      this.products = res;
      this.loading = false;
      // console.log("Productos cargados", res);
    },error =>{
        console.log(error.message);
        
    })
  }

  getCategories(){
    this.loading = true,
    this.serviceProducts.getCategories().subscribe((res)=>{
      this.categories = res;
      this.loading = false;
    },error =>{
        console.log(error.message);
        
    })
  }

  selectedChange(event:any){
    let category = event.target.value;
    (category == "all") ? this.getProducts() : this.getFilterByCategories(category);
  }
 
  getFilterByCategories(keyWord:any){
    this.loading = true,
    this.serviceProducts.getFilterByCategories(keyWord).subscribe((res)=>{
      this.products = res;
      this.loading = false;
    },error =>{
        console.log(error.message);
        
    })
  }

  addToCart(product:any) {
    if ('cart' in localStorage) {
        this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
        let exist = this.cartProducts.find(item => item.id == product.id);
        if (exist) {
            alert('Product is already in the cart');
        } else {
            this.cartProducts.push({ item: product, quantity: this.amount });
            localStorage.setItem('cart', JSON.stringify(this.cartProducts));
        }
    } else {
        this.cartProducts.push({ item: product, quantity: this.amount });
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
}
 
  
}
