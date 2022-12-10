import { Component, OnInit } from '@angular/core';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  myDetails = [
    { companyName: 'Tata Consultancy Services',
      designation: 'Assistant Systems Engineer',
      time: 'July/2022 - Currently ',
      skills: ['Angular','Node.Js', 'JavaScript', 'Java']
    },
    { companyName: 'Tata Consultancy Services',
      designation: 'Assistant Systems Engineer-Trainee',
      time: 'July/2021 - July/2022',
      skills: ['Angular','Node.Js', 'JavaScript', 'Java']
    }
  ]
  l = this.myDetails.length
  ngOnInit(): void {
  }

}

