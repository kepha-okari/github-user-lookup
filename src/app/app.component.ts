import { Component } from '@angular/core';
import { Http,Response } from  '@angular/http';
import { Details } from './details';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub user lookup App';
    userName='';
    avatar_url='';
    details:Details;

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
