import { Component, OnInit } from "@angular/core";
import { Rental } from "../shared/rental.model";
import { RentalService } from "../shared/rental.service";

@Component({
  selector: "bwm-rental-listing",
  templateUrl: "./rental-listing.component.html",
  styleUrls: ["./rental-listing.component.scss"],
})
//Interface OnInit - has to implement ngOnInit
export class RentalListingComponent implements OnInit {
  rentals: Rental[] = [];
  someData = "Some Data";
  isLoaded = false;

  //retrieve rental service - store in rentalService
  constructor(private rentalService: RentalService) {}

  //get rentals on initialization
  ngOnInit() {
    //subscribe since we are recieving Observable
    this.rentalService.getRentals().subscribe((rentals: Rental[]) => {
      this.rentals = rentals;
    });
  }
}
