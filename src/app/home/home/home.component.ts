import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { SkillsModalComponent } from 'src/app/skills-modal/skills-modal.component';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{ 
  
    

  sidebarVisible: boolean = false;

  items: string[] = [
    'Java',
    'Angular',
    'TypeScript',
    'Oracle SQL',
    'React',
    'AWS',
    'Next JS',
    'Python',
    'Spring-Boot',
    'MongoDB',
    'MySQL', 
    'Jasmine',
    'Jenkins',
    'OpenShift',
    'GitHub',
    'GitLab',
    'Bitbucket',
    'Groovy',
    'Kotlin',
    'Postman',
    'JavaScript',
    'New Relic'
  ];

  constructor(private dialogService: DialogService, private primengConfig: PrimeNGConfig){}

  ngOnInit() { 
    this.primengConfig.ripple = true; 
} 

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
