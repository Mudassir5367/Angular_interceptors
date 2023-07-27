import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url= 'https://jsonplaceholder.typicode.com/users';

  dataSource = new BehaviorSubject('initial value');

  constructor(private http:HttpClient) { }
// interceptor header start
  // getData(){
  //  return this.http.get(this.url);
  // }

  // getPosts(){
  //  return this.http.get('https://jsonplaceholder.typicode.com/posts');
  // }

// interceptor header end

// subject and behaviour subject 
  data(value:any)
  {
    return this.dataSource.next(value);
  }

}
