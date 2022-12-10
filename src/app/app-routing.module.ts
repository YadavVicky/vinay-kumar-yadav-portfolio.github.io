import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './education/details/details.component';
import { EducationListComponent } from './education/education-list/education-list.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './education/experience/experience.component';
import { ProjectComponent } from './education/project/project.component';
import { SkillsComponent } from './education/skills/skills.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'education', component: EducationComponent, children: [
      { path: 'details', component: DetailsComponent},
      { path: 'experience', component: ExperienceComponent},
      { path:'education', component: EducationListComponent},
      { path: 'projects', component: ProjectComponent},
      { path: 'skills', component: SkillsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
