import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  resizeTimeout : any;
  throttled : boolean = false;
  delay : number = 250;

  constructor() { }

  ngOnInit(): void {
  }

  onCollapseToggled(){
    this.collapsed = !this.collapsed;
    console.log(this.collapsed);
  }

  onWindowResized(){
    if(!this.throttled){
      this.collapsed = true;
      this.throttled = true;
      console.log('collapse');
      setTimeout(() => {
        this.throttled = false;
      }, this.delay);
      
    }
    
  }
}
