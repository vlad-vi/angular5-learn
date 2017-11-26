import { Injectable } from '@angular/core';
import {ConfigOptions} from '../models/config-options.model';

@Injectable()
export class ConfigOptionsService {
  private configOptions: ConfigOptions;

  configure(config: ConfigOptions) {
    this.configOptions = config;
  }

  getConfig() {
    return this.configOptions;
  }
}
