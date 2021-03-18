import axios, { AxiosInstance } from 'axios';
import { objectToQueryString } from '../../utils';
import { IRequestCancelFunctions, AxiosRequestConfigProps, AxiosResponse } from './types';

const API_BASE_URL = 'https://domain.com/v1';

let client: AxiosInstance = axios.create({
	responseType: 'json',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	transformResponse: (response) => response,
});

let requestCancelFunctions: IRequestCancelFunctions = {};
const storeRequestCancelFc = (requestId: string, cancelFc: Function) => {
	requestCancelFunctions[requestId] = cancelFc;
};
client.interceptors.request.use(
	(config) => {
		const { requestId }: AxiosRequestConfigProps = config;
		if (requestId) {
			requestCancelFunctions[requestId] && requestCancelFunctions[requestId]();
			config.cancelToken = new axios.CancelToken(storeRequestCancelFc.bind(null, requestId));
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

const GET = async <REQUEST, RESPONSE>(
	url: string,
	data?: REQUEST,
	axiosConfig?: AxiosRequestConfigProps
): Promise<AxiosResponse<RESPONSE>> => {
	const queryString = data ? objectToQueryString<REQUEST>(data) : null;
	const newUrl = queryString ? `${API_BASE_URL}/${url}?${queryString}` : `${API_BASE_URL}/${url}`;
	return client.get(newUrl, axiosConfig);
};

const apiMethods = {
	get: GET,
};

export default apiMethods;
