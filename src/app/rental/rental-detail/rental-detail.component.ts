import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RentalService } from "../shared/rental.service";
import { Rental } from "../shared/rental.model";

//Provider - the way this is defined means that the listing and detail page has a different RentalService

@Component({
  selector: "bwm-rental-detail",
  templateUrl: "./rental-detail.component.html",
  styleUrls: ["./rental-detail.component.scss"],
})
export class RentalDetailComponent {
  rental: Rental;
  //Use route inside entire component
  //dependency injection - activated route
  //dont need independent variable - Angular does this automatically for us
  constructor(
    private rentalService: RentalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.rentalService
        .getRentalById(params["rentalId"])
        .subscribe((rental) => {
          this.rental = rental;
        });
    });
  }
}
