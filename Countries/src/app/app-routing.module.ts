import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountrydetailsComponent } from './countrydetails/countrydetails.component';
import { CountrylistComponent } from './countrylist/countrylist.component';

const routes: Routes = [
  {path:"",component:CountrylistComponent},
  {path:"country/:id",component:CountrydetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
