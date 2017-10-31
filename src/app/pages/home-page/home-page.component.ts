import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {
public user: string = '';
isAdmin:boolean = true;

constructor() { 
  var data: any = JSON.parse(localStorage.getItem('sennit.user'));
  if (data) {
    this.isAdmin = data.isAdmin;  
  }    
}

  ngOnInit() {
  }

}
