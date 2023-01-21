import { Moment } from 'moment';

interface Param {
	id: string,
	begin: string,
	end: string,
}

export const getICS = async (params: Param) => {

	const query = Object.keys(params).map(k => k + '=' + params[k as keyof Param]).join('&');
	
	const res = await fetch('/api/getics?' + query,{
		method:'GET'
	})
	
	return res.json();
}

