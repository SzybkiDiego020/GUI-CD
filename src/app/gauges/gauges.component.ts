import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {interval, Subscription} from "rxjs";

const red = "invert(11%) sepia(95%) saturate(7155%) hue-rotate(15deg) brightness(105%) contrast(121%)";
const white = "invert(100%) sepia(0%) saturate(7436%) hue-rotate(107deg) brightness(98%) contrast(96%)";
const blue = "invert(9%) sepia(100%) saturate(7238%) hue-rotate(247deg) brightness(90%) contrast(145%)";
const green = "invert(76%) sepia(8%) saturate(3200%) hue-rotate(84deg) brightness(97%) contrast(67%)";
const gray = "invert(13%) sepia(1%) saturate(6264%) hue-rotate(315deg) brightness(91%) contrast(76%)";
const yellow = "invert(100%) sepia(100%) saturate(4807%) hue-rotate(358deg) brightness(105%) contrast(108%)";
@Component({
  selector: 'app-gauges',
  templateUrl: './gauges.component.html',
  styleUrls: ['./gauges.component.css']
})
export class GaugesComponent implements OnInit {

  speedValue = 80;
  tachoValue = 4;
  tempValue = 0.3;
  fuelValue = 0.9;

  @ViewChild('speedometer') speedometer: any;

  @ViewChild('tachometer') tachometer: any;

  @ViewChild('fuel') fuel: any;

  @ViewChild('temp') temp: any;

  oil = true;
  engine = false;
  battery = false;
  break = true;
  seatbelt = true;
  snow = false;
  glowPlug = false;
  hood = false;
  mileageTrip = 761;
  mileageTotal = 123456;
  direction = "none";
  arrowOn = false;
  source = interval(500)
  subscription = new Subscription();
  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.speedometer.gauge.options.value = this.speedValue;
    this.speedometer.gauge.update();

    this.tachometer.gauge.options.value = this.tachoValue;
    this.tachometer.gauge.update();

    this.fuel.gauge.options.value = this.fuelValue;
    this.fuel.gauge.update();

    this.temp.gauge.options.value = this.tempValue;
    this.temp.gauge.update();

    this.changeFuel(this.fuelValue);
    this.changeSpeedometer(this.speedValue);
    this.changeTachometer(this.tachoValue);
    this.changeTemperature(this.tempValue);

    this.changeOil();
    this.changeBattery();
    this.changeEngine();
    this.changeBreak();
    this.changeSeatbelt();
    this.changeSnow();
    this.changeGlowPlug();
    this.changeHood();

    this.subscription = this.source.subscribe(() => this.blinkDirection());
    this.randomFuel();
  }

  changeSpeedometer(givenValue: number){
    this.speedometer.value = givenValue;
  }

  changeTachometer(givenValue: number){
    this.tachometer.value = givenValue;
  }

  changeFuel(givenValue: number){
    this.fuel.value = givenValue;

    if(givenValue >= 0.875){
      // @ts-ignore
      document.getElementById('fuelIcon').style.webkitFilter = red;
    }
    else if(givenValue >= 0.125){
      // @ts-ignore
      document.getElementById('fuelIcon').style.webkitFilter = white;
    }
    else{
      // @ts-ignore
      document.getElementById('fuelIcon').style.webkitFilter = green;
    }
  }

  randomFuel(){
    this.changeFuel(Math.random());
  }

  changeTemperature(givenValue: number){
    this.temp.value = givenValue;

    if(givenValue < 0.125){
      // @ts-ignore
      document.getElementById('tempIcon').style.webkitFilter = blue;
    }
    else if(givenValue > 0.875){
      // @ts-ignore
      document.getElementById('tempIcon').style.webkitFilter = red;
    }
    else{
      // @ts-ignore
      document.getElementById('tempIcon').style.webkitFilter = white;
    }
  }

  randomTemp() {
    this.changeTemperature(Math.random());
  }

  changeOil(){
    this.oil = !this.oil;
    if(this.oil){
      // @ts-ignore
      document.getElementById('oilIcon').style.webkitFilter = red;
      return;
    }
    // @ts-ignore
    document.getElementById('oilIcon').style.webkitFilter = gray;
  }

  changeBattery(){
    this.battery = !this.battery;
    if(this.battery){
      // @ts-ignore
      document.getElementById('batteryIcon').style.webkitFilter = red;
      return;
    }
    // @ts-ignore
    document.getElementById('batteryIcon').style.webkitFilter = gray;
  }

  changeEngine(){
    this.engine = !this.engine;
    if(this.engine){
      // @ts-ignore
      document.getElementById('engineIcon').style.webkitFilter = yellow;
      return;
    }
    // @ts-ignore
    document.getElementById('engineIcon').style.webkitFilter = gray;
  }

  changeBreak(){
    this.break = !this.break;
    if(this.break){
      // @ts-ignore
      document.getElementById('breakIcon').style.webkitFilter = red;
      return;
    }
    // @ts-ignore
    document.getElementById('breakIcon').style.webkitFilter = gray;
  }

  changeSeatbelt(){
    this.seatbelt = !this.seatbelt;
    if(this.seatbelt){
      // @ts-ignore
      document.getElementById('seatbeltIcon').style.webkitFilter = red;
      return;
    }
    // @ts-ignore
    document.getElementById('seatbeltIcon').style.webkitFilter = gray;
  }

  changeSnow(){
    this.snow = !this.snow;
    if(this.snow){
      // @ts-ignore
      document.getElementById('snowIcon').style.webkitFilter = yellow;
      return;
    }
    // @ts-ignore
    document.getElementById('snowIcon').style.webkitFilter = gray;
  }

  changeGlowPlug(){
    this.glowPlug = !this.glowPlug;
    if(this.glowPlug){
      // @ts-ignore
      document.getElementById('glowPlugIcon').style.webkitFilter = yellow;
      return;
    }
    // @ts-ignore
    document.getElementById('glowPlugIcon').style.webkitFilter = gray;
  }

  changeHood(){
    this.hood = !this.hood;
    if(this.hood){
      // @ts-ignore
      document.getElementById('hoodIcon').style.webkitFilter = yellow;
      return;
    }
    // @ts-ignore
    document.getElementById('hoodIcon').style.webkitFilter = gray;
  }

  @HostListener('wheel', ["$event"])
  changeMileageTotal(event: WheelEvent){
    this.mileageTotal += event.deltaY>0? 1:-1;
  }

  goRight(){
    if(this.direction == "none"){this.direction = "right"; this.arrowOn = true;}
    else{this.direction = "none"; this.arrowOn = false;}
  }

  goLeft(){
    if(this.direction == "none"){this.direction = "left"; this.arrowOn = true;}
    else{this.direction = "none"; this.arrowOn = false;}
  }

  blinkDirection() {
    console.log("blink - direction is "+this.direction);
    if (this.direction == "right") {
      if (!this.arrowOn) {
        // @ts-ignore
        document.getElementById("rightArrowIcon").style.webkitFilter = green;
        this.arrowOn = true;
      } else { // @ts-ignore
        document.getElementById("rightArrowIcon").style.webkitFilter = gray;
        this.arrowOn = false;
      }
    } else if (this.direction == "left") {
      if (!this.arrowOn) { // @ts-ignore
        document.getElementById("leftArrowIcon").style.webkitFilter = green;
        this.arrowOn = true;
      } else { // @ts-ignore
        document.getElementById("leftArrowIcon").style.webkitFilter = gray;
        this.arrowOn = false;
      }
    } else {
      // @ts-ignore
      document.getElementById("leftArrowIcon").style.webkitFilter = gray;
      this.arrowOn = false;
      // @ts-ignore
      document.getElementById("rightArrowIcon").style.webkitFilter = gray;
      this.arrowOn = false;
    }
  }

}
