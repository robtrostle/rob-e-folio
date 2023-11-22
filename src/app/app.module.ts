import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home/home/home.component';
import { ToolbarModule } from 'primeng/toolbar';
import { DockModule } from 'primeng/dock';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CardModule } from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact/contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SkillsModalComponent } from './skills-modal/skills-modal.component';
import { DialogModule } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { ScrollerModule } from 'primeng/scroller';
import { ProjectsComponent } from './projects/projects.component';
import { RippleModule } from 'primeng/ripple'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    SkillsModalComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    ToolbarModule,
    DockModule,
    SidebarModule,
    AvatarModule,
    AvatarGroupModule,
    CardModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    SplitButtonModule,
    DialogModule,
    ScrollerModule,
    RippleModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
