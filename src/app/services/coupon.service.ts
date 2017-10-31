import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CouponService {
    public coupons: any[] = [];
    couponChange: Observable<any>;
    couponChangeObserver: Observer<any>;

    constructor() {
        this.couponChange = new Observable((observer: Observer<any>) => {
            this.couponChangeObserver = observer;
        });
    }

  
    getItems(): any[] {
        var data = localStorage.getItem('sennit.coupon');
        if (data) {
            this.coupons = JSON.parse(data);
        }
        this.couponChangeObserver.next(this.coupons);
        return this.coupons;
    }

    load() {
        var data = localStorage.getItem('sennit.coupon');
        if (data) {
            this.coupons = JSON.parse(data);
        }
        this.couponChangeObserver.next(this.coupons);
    }

    clear() {
        this.coupons = [];
        localStorage.removeItem('sennit.coupon');
        this.couponChangeObserver.next(this.coupons);
    }
    
}