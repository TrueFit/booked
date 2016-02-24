import { iOS, android } from './constants';

class ConfigClass {
  setPlatform(platform) {
    this.platform = platform;
  }

  setUrl(url){
    this.rootUrl = url;
  }
}

export const Config = new ConfigClass();
