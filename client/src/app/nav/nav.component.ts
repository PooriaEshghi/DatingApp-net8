import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  private accountService = inject(AccountService);
  loggedIn = false
  model: any = {};
  login() {
    this.accountService.login(this.model).subscribe({
      next: (response) => {
        this.loggedIn = true
        console.log(response);
      },
      error: (error) => console.log(error),
    });
    console.log(this.model);
  }
  logout(){
    this.loggedIn = false
  }
}
