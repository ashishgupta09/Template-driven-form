import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formValidation';

  firstname:string="";
  lastname:string="";
  
 @ViewChild("myform") form:NgForm|undefined;
 
  defaultvalue:string="male";
 

 ngOnInit(): void {
 }
  
 
 Onsubmit(){
  console.log(this.form);
 }

 submitForm(){

 }

 gender=[
  {id:1,value:"male"},
  {id:2,value:"female"},
  {id:3,value:"other"}
 ]

 setDefaultValue(){
  }
}
