import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit  {
  customerId = "";
  params$! : Subscription;
  
  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.params$ = this.activatedRoute.params.subscribe(params => {
      console.log("param val :" + params['custId']);
      this.customerId = params['custId'];

  });
}

ngDestroy(): void {
  console.log("destroy subscription observable !");
  this.params$.unsubscribe();
}

}