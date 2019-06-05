import {Component} from '@angular/core' ;
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { AuthService } from 'src/app/auth/auth.service';
@Component ({
  selector : 'app-header',
  templateUrl : './header.component.html'
})
export class HeaderComponent {
  constructor(private storageService: DataStorageService,
   public authService: AuthService) {}
  onSaveData() {
    this.storageService.storeRecipes().subscribe(
      (response) => {console.log(response); }
    );
  }
  onGetData() {
    this.storageService.getRecipes();
  }
  onLogout() {
    this.authService.logout();
  }
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
