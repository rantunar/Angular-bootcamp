import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  public topics = ["Angular","React"];
  public userModel = new User("", "", undefined, "", "", false);

  submit() {
    console.log(this.userModel);
  }

}
