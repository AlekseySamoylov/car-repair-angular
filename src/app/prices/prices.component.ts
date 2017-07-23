import {Component, OnInit} from '@angular/core';
import {PricesService} from './prices.service';
import {Http} from '@angular/http';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  providers: [PricesService]
})
export class PricesComponent implements OnInit {
  admin: boolean;
  works;
  constructor(private http: Http) {}
  ngOnInit(): void {
    this.http.get('http://78.155.217.216:8080/serviceiii/rest/works').subscribe(response => {
      this.works = response.json();
    });
  }

}
