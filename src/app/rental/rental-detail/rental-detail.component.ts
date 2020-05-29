import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "bwm-rental-detail",
  templateUrl: "./rental-detail.component.html",
})
export class RentalDetailComponent {
  public rentalId = "";
  //Use route inside entire component
  //dependency injection - activated route
  //dont need independent variable - Angular does this automatically for us
  constructor(private route: ActivatedRoute) {}

  //lifecycle function - called when component is initialized
  ngOnInit() {
    //subscribe to params Observable
    //get data from subscription in callback function
    this.route.params.subscribe((params) => {
      //get param from URL - in rental module path
      //get dynamic path from URL
      this.rentalId = params["rentalId"];
    });
  }
}
