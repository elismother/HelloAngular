import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL: string = "http://localhost:3000/api";

  games$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) { }

  // get all
getAllGames(): void {
  this.http.get<any[]>(`${ this.baseURL}/games`).subscribe(result => {
    console.log("get all games at service", result);
    this.games$.next(result);
  })
  // this.dataArray.push({name: "New Value", id: 0});
  // this.mockGameArray$.next(this.dataArray);
// let test = this.mockGameArray.getValue().slice(0,-1);
// this.mockGameArray.next(test.push ({ name: "new item", id: 0}))

  // this.mockGameArray.next([
  //   { name: "toast", id: 1},
  //   { name: "toast 1", id: 2},
  //   { name: "toast 2", id: 3},
  //   { name: "new toast", id: 4}
  // ])
}
// test: any[] = [
//   {id: 1, name: "toast"},
//   {id: 2, name: "toast2"},
//   {id: 3, name: "toast3"},
//   {id: 4, name: "toast4"},

// ]
// getOneGAme(id: string): void {
//   this.test.filter(obj => obj.id == 1);
  // this.http.get<any[]>(`${ this.baseURL}/games/${id}`).subscribe(result => {
  //   console.log("get all games at service", result);
  //   this.games$.next(result);
}
  // get one by id
  // create  new
  // update existing
  // delete by id
// }