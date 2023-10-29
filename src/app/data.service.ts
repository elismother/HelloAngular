import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL: string = "http://localhost:3000/api";

  constructor(private http: HttpClient) { }

  // get all
  // get one by id
  // create  new
  // update existing
  // delete by id
}
