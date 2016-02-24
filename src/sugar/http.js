// import
import axios from 'axios';
import { Config } from '../support';

// export
export default class Http {
  constructor() {
    this.ROOT_URL = Config.rootUrl;
  }

  get(relativeUrl) {
    return axios.get(`${this.ROOT_URL}/${relativeUrl}`);
  }

  post(relativeUrl, body) {
    return axios.post(`${this.ROOT_URL}/${relativeUrl}`, body);
  }
}
