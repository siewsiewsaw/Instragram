import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Instagram';
  constructor(private http: HttpClient) { }
  userdata;
  destination;

  ngOnInit() {
     this.http.get("https://insta.nextacademy.com/api/v1/users/")
     .subscribe((data) => this.displayuser(data)); 
     
     this.http.get("https://insta.nextacademy.com/api/v1/images/?userId=&lt;int&gt;")
     .subscribe((data1) => this.displaydest(data1));  
     console.log(this.displayuser)
  }
  displayuser(data) {this.userdata = data;}
  displaydest(data1) {this.destination = data1;}
  
}

