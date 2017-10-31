import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService {
    private serviceUrl: string = 'http://localhost:55520/';    

    constructor(private http: Http) { }

    createUser(data: any) {
        
        return this.http
            .post(environment.serviceUrl + 'v1/customers', data)
            .map((res: Response) => res.json());
    }

    
    createCoupon(data: any)
    {
        return this.http
            .post(environment.serviceUrl + 'v1/coupon', data)
            .map((res: Response) => res.json());
    }

    updateCoupon(data: any)
    {
            return this.http
            .patch(environment.serviceUrl + 'v1/couponUpdateByCustomer', data)
            .map((res: Response) => res.json());
    }

    authenticate(data: any) {
        var dt = "grant_type=password&username=" + data.username + "&password=" + data.password;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.serviceUrl + 'v1/authenticate', dt, options).map((res: Response) => res.json());
    }

    // - relatório de cliente x premio.
     
    getReportAdwards()
    {
        //Pegar todos cupons registrados tanto premiados quanto não premiados.
        return this.http
        .get(this.serviceUrl + 'v1/couponsNotAwarded/')
        .map((res: Response) => res.json());   
    }

    getReportCustomers()
    {
        return this.http
        .get(this.serviceUrl + 'v1/custumers/')
        .map((res: Response) => res.json());                
    }

    getCoupons(data: any) {
        return this.http
            .get(this.serviceUrl + 'v1/couponsByCustomer/'+ data)
            .map((res: Response) => res.json());           
    }

    createOrder(data: any) {
        var token = localStorage.getItem('sennit.token');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', `Bearer ${token}`); Headers
        let options = new RequestOptions({ headers: headers });
        return this.http
            .post(this.serviceUrl + 'v1/orders', data, options)
            .map((res: Response) => res.json());
    }
}