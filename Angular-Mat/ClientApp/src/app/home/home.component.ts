import { Component } from '@angular/core';
import {Registration} from "../models/registration";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  displayedColumns = ["Id", "Name", "CheckinDate"];
  Registrations :Registration[] = [{
    Id : 1,
    Name : 'Some Name',
    CheckinDate: new Date(),
    Status: 1
  },
    {
      Id : 2,
      Name : 'Another Name',
      CheckinDate: new Date(),
      Status: 1
    }];
}
