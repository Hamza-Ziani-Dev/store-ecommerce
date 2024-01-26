import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceProductsService } from '../products/services/service-products.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  productId: any; 
  productDetails : any;
  constructor(private route: ActivatedRoute, private productsService: ServiceProductsService) { }

  ngOnInit() {
    // Retrieve the ID from the URL parameters
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
    });
    this.getProductsById();
  }

  getProductsById(){
    this.productsService.getProductsById(this.productId).subscribe((res)=>{
      this.productDetails = res;
      console.log('====================================');
      console.log(this.productDetails );
      console.log('====================================');
    })
  }

}
