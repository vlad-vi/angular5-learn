import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {
  private static possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  constructor(private length: number) { }

  generateString(): string {
    let text = '';
    for (let index = 0; index < this.length; index++) {
      text += GeneratorService.possible.charAt(Math.random() * GeneratorService.length);
    }
    return text;
  }
}
