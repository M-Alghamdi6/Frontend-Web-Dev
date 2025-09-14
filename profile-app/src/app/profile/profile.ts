import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [DatePipe],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss'] 
})
export class Profile {
  userName: string = 'Mohammed ALghamdi';
  age: number = 23;
  joinDate: Date = new Date('2025-08-31');
  profileImageUrl: string = 'https://tse3.mm.bing.net/th/id/OIP.M1Zy636BWJnmuyvELcz_RgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3';

  showWelcomeMessage(): void {
    alert(`Welcome, ${this.userName}! Thanks for joining us.`);
  }
}
