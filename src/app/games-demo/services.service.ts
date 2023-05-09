import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  validateForm(fullname: string, phone: string) {
    if (this.validateString(fullname) == true && this.validatePhoneNumber(phone) == true) {
      return true;
    }
    return false;
  }

  validateString(str: string) {
    if (typeof str === 'string') {
      return true;
    }
    return false;
  }

  validatePhoneNumber(phone: string) {
    if (this.validateString(phone) === true) {
      if (phone.length === 10 || phone.length === 11) {
        return true;
      }
    }
    return false;
  }
}
