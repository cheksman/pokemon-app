import axios, {AxiosRequestConfig} from 'axios';
import { Methods } from '../../interfaces/HttpTypes';

  export const callPlainApi = (url: string, data: any, method: Methods): Promise<any> =>
    new Promise((resolve, reject) => {
      const axiosOptions: AxiosRequestConfig = { timeout: 30000,
       headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
       } };
      if (method === Methods.put) {
        axios
          .put(`${process.env.REACT_APP_BASE_URL}${url}`, data, {
            timeout: axiosOptions.timeout,
            headers: axiosOptions.headers
          })
          .then((response) => {
            resolve(response.data);
          })
          .catch((err) => {
            reject(err);
          });
      }
      if (method === Methods.post) {
        axios
          .post(`${process.env.REACT_APP_BASE_URL}${url}`, data, {
            timeout: axiosOptions.timeout,
            headers: axiosOptions.headers
          })
          .then((response) => {
            resolve(response.data);
          })
          .catch((err) => {
            reject(err);
          });
      } 
      if (method === Methods.get) {
        axios
          .get(`${process.env.REACT_APP_BASE_URL}${url}`, {
            timeout: axiosOptions.timeout,
            headers: axiosOptions.headers
          })
          .then((response) => {
            resolve(response.data);
          })
          .catch((err) => {
            reject(err);
          });
      }
      if (method === Methods.patch) {
        axios
          .patch(`${process.env.REACT_APP_BASE_URL}${url}`, data, {
            timeout: axiosOptions.timeout,
            headers: axiosOptions.headers
          })
          .then((response) => {
            resolve(response.data);
          })
          .catch((err) => {
            reject(err);
          });
      }
    });