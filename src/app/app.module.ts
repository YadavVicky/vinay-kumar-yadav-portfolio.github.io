import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { LandingComponent } from './landing/landing.component';
import { DetailsComponent } from './education/details/details.component';
import { ExperienceComponent } from './education/experience/experience.component';
import { EducationListComponent } from './education/education-list/education-list.component';
import { ProjectComponent } from './education/project/project.component';
import { SkillsComponent } from './education/skills/skills.component';



@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    LandingComponent,
    DetailsComponent,
    ExperienceComponent,
    EducationListComponent,
    ProjectComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
