import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  error(msg: string): void {
    console.error('[ERROR] - ' + msg);
  }
  
  warning(msg: string): void {
    console.warn('[WARN] - ' + msg);
  }

}
