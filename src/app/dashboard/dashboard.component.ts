import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tempSliderValue = 100;
  fanSliderValue = 200;

  touchscreenState = "menu";
  constructor() { }

  ngOnInit(): void {
    this.changeTempSlider(this.tempSliderValue);
    this.changeFanSlider(this.fanSliderValue);
  }

  changeTempSlider(sliderValue: number){
    // @ts-ignore
    document.getElementById("tempSlider").style.accentColor = "rgb("+sliderValue+",20,"+(255-sliderValue)+")"
    // @ts-ignore
    document.getElementById("slider-cold-icon").style.color = "rgb(20,20,"+(255-sliderValue)+")"
    // @ts-ignore
    document.getElementById("slider-hot-icon").style.color = "rgb("+sliderValue+",20,20)"
  }

  changeFanSlider(sliderValue: number){
    // @ts-ignore
    document.getElementById("fanSlider").style.accentColor = "rgb("+sliderValue+","+sliderValue+","+sliderValue+")"
    // @ts-ignore
    document.getElementById("slider-fan-icon").style.color = "rgb("+(255*(250-sliderValue)/100)+","+(255*(250-sliderValue)/100)+","+(255*(250-sliderValue)/100)+")"
    // @ts-ignore
    document.getElementById("slider-noFan-icon").style.color = "rgb("+(255*(sliderValue-150)/100)+","+(255*(sliderValue-150)/100)+","+(255*(sliderValue-150)/100)+")"
  }

  changeTouchscreen(goWhere: string){
    this.touchscreenState = goWhere;
  }

}
