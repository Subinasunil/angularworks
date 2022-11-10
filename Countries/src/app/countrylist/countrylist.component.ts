import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { CountriesService } from '../service/countries.service';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {
  countries:any;

  constructor(private service:CountriesService,private router:Router) { }

  ngOnInit(): void {
    this.countries=this.service.getCountries()
    console.log(this.countries);
  }
  redirectToCountryDetail(alpha2Code:any){
    console.log(alpha2Code);
    this.router.navigate(["countries/",alpha2Code])
    

  }

}
