import { Injectable, InjectionToken } from '@angular/core';

@Injectable()
export class ConstantsService {

  constructor() { }

  getConst() {
    return AppInfo;
  }
}

export const AppInfo = {
  application: 'TaskManager',
  version: '1.0'
};
