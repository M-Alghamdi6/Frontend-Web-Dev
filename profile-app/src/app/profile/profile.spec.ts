import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [DatePipe],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {
  userName: string = 'Mohammed Alghamdi';
  age: number = 23;
  joinDate: Date = new Date('2025-08-31');
  profileImageUrl: string = 'https://via.placeholder.com/150x150/4CAF50/white?text=Profile';

  showWelcomeMessage(): void {
    alert(`Welcome, ${this.userName}! Thanks for joining us.`);
  }
}
