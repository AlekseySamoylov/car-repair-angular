import {LogLevel} from 'protractor/built/logger';

export class LoggingService {
  private logLevel = LogLevel.INFO;
  className: string;
  constructor() {
  }

  info(message: string) {
    if (this.logLevel === LogLevel.INFO) {
      console.log('INFO ' + new Date() + ' class: ' + this.className + ' ' + message);
    }
  }

  debug(message: string) {
    if (this.logLevel === LogLevel.DEBUG) {
      console.log('DEBUG ' + new Date() + ' class: ' + this.className + ' ' + message);
    }
  }

}

