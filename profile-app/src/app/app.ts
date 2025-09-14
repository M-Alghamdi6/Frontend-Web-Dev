import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { SkillList } from './skill-list/skill-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Profile, SkillList],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] 
})
export class App {
  protected readonly title = signal('profile-app');
}
