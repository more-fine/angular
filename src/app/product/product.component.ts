import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public routeInfo: ActivatedRoute ) { }  
  ngOnInit() {  
    this.routeInfo.queryParams.subscribe(res => {  
      console.log(res)
    });  
  }  
}
