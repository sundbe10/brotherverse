import * as Axios from 'axios';

export interface IHttpService {
    get<T>(url: string, config?: Axios.AxiosRequestConfig): Promise<T>;
    post<T>(url: string, data: any, config?: Axios.AxiosRequestConfig): Promise<T>;
}