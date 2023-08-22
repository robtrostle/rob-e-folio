import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { SkillsModalComponent } from 'src/app/skills-modal/skills-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  sidebarVisible: boolean = false;

  items: string[] = [
    'Angular',
    'TypeScript',
    'Java',
    'Python',
    'Spring-Boot',
    'MongoDB',
    'MySQL', 
    'Jasmine',
    'Jenkins',
    'OpenShift',
    'GitHub',
    'Bitbucket',
    'Groovy',
    'Postman',
    'JavaScript'
  ];

  constructor(private dialogService: DialogService){}

    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

    visibleInfo: boolean = false;

    showInfoDialog() {
        this.visibleInfo = true;
    }

   openSkillsModal() {
    const ref = this.dialogService.open(SkillsModalComponent, {
      header: 'My Modal',
      width: '70%', // Adjust the width as needed
      contentStyle: { 'max-height': '400px', 'overflow': 'auto' }, // Optional styles
    });
    
    // Subscribe to the 'onHide' event to handle modal closure
    ref.onClose.subscribe((result) => {
      console.log('Skills Modal closed:', result);
    });
  }
}
