import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
NavigationOption = 'recipe';
  onNavigate(navigateOption: string) {
    this.NavigationOption = navigateOption;
}
ngOnInit() {
firebase.initializeApp({apiKey: 'AIzaSyBGl4yB4g6MYB8Nq_oRMo3nSAVh328qhgI',
authDomain: 'angular7-project-d4b73.firebaseapp.com'});
}
}
