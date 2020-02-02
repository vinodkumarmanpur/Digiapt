import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   user: User[];
   datepickerConfig: Partial<BsDatepickerConfig>;


  constructor(private userService: UserService ) {
    this.datepickerConfig = Object.assign({},
       {
        minDate: new Date(2016, 12, 31)

    });

   }

  ngOnInit() {
  }
  insertUser(user: User): void {
    console.log(user);
    this.userService.save(user);

}
}
