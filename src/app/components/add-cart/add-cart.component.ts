import { Component, OnInit } from '@angular/core';
import { ServiceCartService } from './services/service-cart.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {
  cartProducts : any[] =[];
  total :any;
  constructor(private cartService : ServiceCartService) { }

  ngOnInit(): void {
    this.getProductsInCart();
    this.addCart();
  }


getProductsInCart(){
  if ('cart' in localStorage) {
    this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
  }
  this.getTotalItem();
}

getTotalItem() {
  let total = 0;
  for (let item of this.cartProducts) {
    const quantity = item.quantity || 0;
    const price = item.item.price || 0;
    total += quantity * price;
    // console.log(quantity);
    // console.log(price);
    console.log(total);
  }
  return total;
}

addAmount(index:any){
  this.cartProducts[index].quantity++;
  this.getTotalItem();
  localStorage.setItem('cart', JSON.stringify(this.cartProducts));
}

minsAmount(index:any){
  this.cartProducts[index].quantity--;
  this.getTotalItem();
  localStorage.setItem('cart', JSON.stringify(this.cartProducts));
}


deleteProduct(index:any){
  this.cartProducts.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(this.cartProducts));
}


clearCart(){
  this.cartProducts = [];
  this.getTotalItem();
  localStorage.setItem('cart', JSON.stringify(this.cartProducts));
}

addCart(){
  let products = this.cartProducts.map((item)=>{
    return {productsId: item.item.id, quantity:item.quantity}
  })
  let model ={
    userId : 5,
    date: new Date(),
    products:products,
  }
  this.cartService.getNewCart(model).subscribe((res)=>{
    console.log('====================================');
    console.log("Data Success!");
    console.log('====================================');
  })
  console.log(model);
  
}

}
