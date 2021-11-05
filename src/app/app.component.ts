import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  //should be trigger whenever form submitted by user
  // onSubmit(form: HTMLFontElement) {  UPDATE after adding ngForm in template:
  onSubmit(form: NgForm) {
    // output whatever user entered:
    console.log("Submitted!", form);
  }
}