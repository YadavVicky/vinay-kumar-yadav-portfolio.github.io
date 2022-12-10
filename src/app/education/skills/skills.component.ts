import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  myStyleInTs_1: string = 'display: none';
  myStyleInTs_2: string = 'display: none';
  myStyleInTs_3: string = 'display: none';
  firstTimeClick_1: boolean = true;
  firstTimeClick_2: boolean = true;
  firstTimeClick_3: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  hideMyDiv(id: string){
      if(id === '1'){
        if(this.firstTimeClick_1){
            this.myStyleInTs_1 = 'display: none';
            this.firstTimeClick_1 = false;
          }
        }else{
          if(id === '2'){
            if(this.firstTimeClick_2){
              this.myStyleInTs_2 = 'display: none';
              this.firstTimeClick_2 = false;
            }
          }
          else{
            if(id === '3'){
              if(this.firstTimeClick_3){
                this.myStyleInTs_3 = 'display: none';
                this.firstTimeClick_3 = false;
              }
            }
          }
        }
      if(id === '1'){
        if(this.myStyleInTs_1 === 'display: none'){
          this.myStyleInTs_1 = 'display: block';
        }else{
          this.myStyleInTs_1 = 'display: none';
        }
      }else{
        if(id === '2'){
          if(this.myStyleInTs_2 === 'display: none'){
            this.myStyleInTs_2 = 'display: block';
          }else{
            this.myStyleInTs_2 = 'display: none';
          }
        }else{
          if(id === '3'){
            if(this.myStyleInTs_3 === 'display: none'){
              this.myStyleInTs_3 = 'display: block';
            }else{
              this.myStyleInTs_3 = 'display: none';
            }
          }
        }
      }
  }
  hideMyDivMouse(id: string){
      if(id === '1'){
        this.myStyleInTs_1 = 'display: none';
        this.firstTimeClick_1 = true;
      }
      if(id=== '2'){
        this.myStyleInTs_2 = 'display: none';
        this.firstTimeClick_2 = true;
      }
      if(id=== '3'){
        this.myStyleInTs_3 = 'display: none';
        this.firstTimeClick_3 = true;
      }
    }
  viewMyDivMouse(id: string){
    if(id === '1'){
      this.myStyleInTs_1 = 'display: block';
      this.firstTimeClick_1 = true;
    }
    if(id=== '2'){
      this.myStyleInTs_2 = 'display: block';
      this.firstTimeClick_2 = true;
    }
    if(id=== '3'){
      this.myStyleInTs_3 = 'display: block';
      this.firstTimeClick_3 = true;
    }
  }
}
