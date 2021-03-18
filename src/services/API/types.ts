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

export type IState = 'OK' | 'ALERT';
export type IProductTypes = 'CPM' | 'vCPM' | 'CPLanding' | 'CPC';
export type IRuntimeStatus = 'active' | 'inactive';

export interface ICampaignsData {
	'alert-count': number;
	'ok-count': number;
	campaigns: ICampaign[];
}

export interface ICampaign {
	identifier: string;
	start: string;
	end: string;
	margin: IEvent;
	products: IProduct[];
	state: string;
	'runtime-status': string;
}

export interface IProduct {
	'campaign-type': string;
	'costs-per-action': IEvent[];
	margin: IEvent;
	rates: IEvent[];
	events: IEvent[];
	start: string;
	end: string;
	state: string;
	identifier: string;
	flights?: IFlight[];
}

export interface IFlight {
	'runtime-status': string;
	'campaign-type': string;
	identifier: string;
	name: string;
	start: string;
	end: string;
	state: string;
	events: IEvent[];
	rates: IEvent[];
	'costs-per-action': IEvent[];
}

export interface IEvent {
	current: number;
	estimated: number;
	type?: string;
	verdict: IVerdict;
}

export interface IVerdict {
	goal: number;
	progress?: number;
	state: string;
}

/* REQUESTS */
export interface GetCampaignsRequest {
	'reference-date': string;
	granularity?: string;
	'order-by'?: string[];
}
