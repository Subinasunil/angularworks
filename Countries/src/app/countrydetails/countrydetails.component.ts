import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../service/countries.service';

@Component({
  selector: 'app-countrydetails',
  templateUrl: './countrydetails.component.html',
  styleUrls: ['./countrydetails.component.css']
})
export class CountrydetailsComponent implements OnInit {
  country:any;

  constructor(private router:ActivatedRoute,private service:CountriesService) { }

  ngOnInit(): void {
    let id=this.router.snapshot.paramMap.get("alpha2Code")
    console.log(id);
    this.country=this.service.getCountryDetail(id)
    console.log(this.country);
  }

}
