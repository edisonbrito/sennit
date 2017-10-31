import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html'
})
export class HeadbarComponent implements OnInit {
  public user: string = '';

  constructor(private router: Router) { 
    var data: any = JSON.parse(localStorage.getItem('sennit.user'));
    if (data) {
      this.user = data.name;
    }
  }

  ngOnInit() {
  }
  
  logout() {
    localStorage.removeItem('sennit.token');
    localStorage.removeItem('sennit.user');
    this.router.navigateByUrl('/');
  }
}
