import { Platform } from '@angular/cdk/platform';
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {
  browserToken = signal<string>('');
  constructor(@Inject(PLATFORM_ID) private platformId: Platform) { 
    if (isPlatformBrowser(this.platformId)) {
      if(localStorage.getItem('token') && this.browserToken() == '') {
        this.browserToken.set(localStorage.getItem('token') as string);
      }
    }
  }
  setBrowserToken(token: string) {
    if (isPlatformBrowser(this.platformId)) {
      console.log(token);
      localStorage.setItem('token', token);
      this.browserToken.set(token);
    }
  }
  getBrowserToken(){
    if (isPlatformBrowser(this.platformId)) {
      return this.browserToken();
    } else {
      return '';
    }
  }
  clearBrowserToken() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
      this.browserToken.set('');
    }
  }
}
