import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-modal',
  templateUrl: './skills-modal.component.html',
  styleUrls: ['./skills-modal.component.css']
})
export class SkillsModalComponent {

  visible: boolean = false;

  constructor() {}

    showDialog() {
        this.visible = true;
    }
}
