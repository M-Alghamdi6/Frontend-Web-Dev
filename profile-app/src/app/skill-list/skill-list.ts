import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skill-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './skill-list.html',
  styleUrls: ['./skill-list.scss']  
})
export class SkillList {
  skills: string[] = ['Angular', 'HTML', 'CSS', 'JS'];
  filterText: string = '';

  get filteredSkills(): string[] {
    if (!this.filterText) {
      return this.skills;
    }
    return this.skills.filter(skill => 
      skill.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
    joinDate: Date = new Date('2025-08-31');
}
