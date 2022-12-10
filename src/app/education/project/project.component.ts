import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  myDetails = [
    { ProjectName: 'Portfolio',
      level: 'Independent(Hobby)',
      time: 'Oct/2022 - Nov/2022 ',
      application:'Web Devlopment',
      link: '',
      desc: 'I have created this website just as a hobby. I like to develop new things and get new learnings out of it.'
    },
    { ProjectName: 'ParCare: Parking Solutions',
      level: 'College',
      time: 'January/2021 - July/2021 ',
      application:'Web Devlopment',
      link: 'https://parcare-parking-services.herokuapp.com/',
      desc: 'It was my final year project. We have build a website for online car parking. In this, user could easy select the parking spot he/she desires to have. I was working as a full stack developer using Node.js(NPM). This will also help user to book parking in advance as well as in real time.'
    },
    { ProjectName: 'Lusicous App',
      level: 'College',
      time: 'August/2020 - December/2020 ',
      application:'Android Devlopment',
      link: '',
      desc: 'It was my final project of Android App Development. It is a functional app in which a user can register or login and can order food from the restaurants. All the database queries was handle by API.'
    },
    { ProjectName: 'YelpCamp',
      level: 'College',
      time: 'March/2020 - July/2020 ',
      application: 'Web Development',
      link: 'https://yelpcamp2811.herokuapp.com/',
      desc: 'It was create as part of my Industrial Project Training. It is a fully functional website with use of Node.Js in the backend and MongoDB Atlas as Database. It is a simple website where user can register or login and add there respective camp sites where they have visited.'
    }
  ]
  l = this.myDetails.length
  constructor() { }

  ngOnInit(): void {
  }

}
