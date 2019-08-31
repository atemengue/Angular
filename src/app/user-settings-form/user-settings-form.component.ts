import { UserSettings } from '../data/user-settings';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: 'ATEMENGUUE',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annuel',
    notes: 'here are some notes...'
  };
  UserSettings: UserSettings = {
    ...this.originalUserSettings
  }

  constructor() { }

  ngOnInit() {
  }

}
