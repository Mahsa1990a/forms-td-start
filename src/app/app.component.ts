import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild('f') signupForm: NgForm;

  defaultQuestion = 'pet'; //for using in select
  answer = '';
  genders = ["Male", "Female"];
  user = {
    username: '',
    email: '',
    secretQusetion: '',
    answer: '',
    gender: ''
  }; // after submitting the form, want to update user obj(inside onSubmit method)

  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    // set the value of whole form with setValue function:
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });                    ^this is not best approach because it rewrite the whole form

    // Better approach:
    this.signupForm.form.patchValue({ //patchValue only over write specific certain controls:
      userData: {
        username: suggestedName
      }
    });
  }

  //should be trigger whenever form submitted by user
  // onSubmit(form: HTMLFontElement) {  UPDATE after adding ngForm in template:
  // onSubmit(form: NgForm) {
  //   // output whatever user entered:
  //   console.log("Submitted!", form);
  // }

  onSubmit() {// with using @viewChild
    // console.log("signupForm => ", this.signupForm);

    this.submitted = true;

    // update user obj after submitting the form:
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQusetion = this.signupForm.value.secret; //secret the name in select
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
  }
}
