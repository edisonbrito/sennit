import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { CustomValidator } from '../../validators/custom.validator';
import { CouponService } from '../../services/coupon.service';
import { Ui } from '../../utils/ui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  providers: [Ui,DataService]

})
export class CouponsComponent implements OnInit {
public user: string = '';
public form: FormGroup;
public errors: any[] = [];
public coupons: any[];

  constructor(private fb: FormBuilder, private ui: Ui, private dataService: DataService, private router: Router) { 
    
    var data: any = JSON.parse(localStorage.getItem('sennit.user'));
    if (data) {
      this.user = data.id;
    } 
    
    this.form = this.fb.group({
      Number: ['', Validators.required],
      IdCustomer: this.user    
  });

  }

  ngOnInit() {
      console.log(this.user);
      this.dataService.getCoupons(this.user).subscribe(result => {
      this.coupons = result;
    })
  }

  submit() {
    this.dataService.updateCoupon(this.form.value).subscribe(result => {    
    }, error => {
      this.errors = JSON.parse(error._body).errors;
    });
  }
}
