import { UserSettings } from '../data/user-settings';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: '',
    emailOffers: false,
    interfaceStyle: '',
    subscriptionType: '',
    notes: ''
  };
  UserSettings: UserSettings = {
    ...this.originalUserSettings
  }

  constructor() { }

  ngOnInit() {
  }

    onSubmit(form: NgForm) {
      console.log('in Sobmit: ', form.valid);
    }
    onBlur(field: NgModel) {
      console.log('In onBlur', field.valid );

    }
}
