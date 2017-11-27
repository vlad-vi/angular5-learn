import { Injectable, InjectionToken } from '@angular/core';

@Injectable()
export class ConstantsService {

  constructor() { }

  getConst() {
    return AppInfo;
  }
}

const AppInfo = {
  application: 'TaskManager',
  version: '1.0'
};
