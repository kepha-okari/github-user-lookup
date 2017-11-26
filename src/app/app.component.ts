import { Component } from '@angular/core';
import { Http,Response } from  '@angular/http';
import { UserInfo } from './user-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub User Lookup App';
    userName='brianmarete';
    avatar_url='';
    details:UserInfo;

    constructor(private http:Http){}

    searchUser(){
    	this.http.get('https://api.github.com/users/'+this.userName).
    	subscribe(
    		(res:Response)=>{
    			const details= res.json();
    			console.log(details);
          this.details=details;
    		});

    }



  }
