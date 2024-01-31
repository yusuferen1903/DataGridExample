import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AccDtoList } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: AccDtoList[] = [];

  constructor() { }

  getData(): Observable<AccDtoList[]> {
    this.loadDataLocally()
    return of(this.data);
  }

  addData(item: AccDtoList): void {
    this.data.push(item);
    this.saveDataLocally(this.data);
  }

  private saveDataLocally(data: AccDtoList[]): void {
    localStorage.setItem('data', JSON.stringify(data));
  }

  private loadDataLocally(): void {
    const savedData = localStorage.getItem('data');
    if (savedData) {
      this.data = JSON.parse(savedData);
    }
  }
}
