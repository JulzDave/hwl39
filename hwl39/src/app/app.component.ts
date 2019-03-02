import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hwl39';
constructor(private http:HttpClient){}

allMovies:any;

  ngOnInit(){
this.http.get('http://localhost:3000/allmovies').subscribe(data=>{
  this.allMovies = data
  debugger;
})
}

}
