import { IHttpService } from "./http.service.interface";
import Axios, { AxiosRequestConfig } from 'axios';
import * as querystring from 'querystring';

export class HttpService implements IHttpService {

    private jwt: string;

    constructor() {
        // Get JWT from session storage
        let jwt;
        if(sessionStorage.getItem('accessToken')) {
            jwt = sessionStorage.getItem('accessToken');
        }
        else {
            jwt = this.getAccessToken();
            sessionStorage.setItem('accessToken', jwt);
        }

        Axios.interceptors.request.use(config => {
            config.headers['authorization'] =`Bearer ${jwt}`;
            config.headers['content-type'] = config.headers['content-type'] || 'application/json';
            return config;
          }, error => {
            return error;
          });
    }

    get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return Axios.get<T>(url, config).then(
            data => {
                return data.data;
            },
            error => {
                throw(error);
            }
        );
    }
    
    post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
        return Axios.post<T>(url, data, config).then(
            data => {
                return data.data;
            },
            error => {
                throw(error);
            }
        );
    }

    private getAccessToken(): string {
        const path = window.location.href;
        return path.split('=')[1];
    }
}