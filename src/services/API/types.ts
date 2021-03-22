import { AxiosRequestConfig } from 'axios';

export interface IRequestCancelFunctions {
	[key: string]: Function;
}

export interface AxiosRequestConfigProps extends AxiosRequestConfig {
	requestId?: string;
}

export interface AxiosResponse<RESPONSE> {
	success: boolean;
	data: RESPONSE;
}

/* REQUESTS */

/* RESPONSES */
