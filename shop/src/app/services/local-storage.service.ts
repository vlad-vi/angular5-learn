import { Injectable } from '@angular/core';

@Injectable()
  export class LocalStorageService {

  setItem(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  getItem(key: string): any {
    return localStorage.getItem(key);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
