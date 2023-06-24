import { useState, useEffect } from 'react';
import { URLType } from 'types/main';
import axios, { AxiosError, AxiosResponse } from 'axios';

const useFetch = (url: URLType) => {
	const [response, setResponse] = useState<AxiosResponse>();
	const [status, setStatus] = useState<number>();
	const [data, setData] = useState<any>();
	const [error, setError] = useState<AxiosError>();
	const [loading, setLoading] = useState(true);
	const [next, setNext] = useState<URLType>(null);
	const [prev, setPrev] = useState<URLType>(null);
	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		const reason = new DOMException('clening up', 'AbortError');
		axios
			.get(url as string, { signal })
			.then((res) => {
				setResponse(res);
				setStatus(res.status);
				setData(res.data);
				setNext(res.data.next);
				setPrev(res.data.previous);
			})
			.catch((error) => {
				if (error.code === 'ERR_CANCELED') return;
				console.error(error);
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});

		return () => {
			controller.abort(reason);
		};
	}, [url]);
	return { response, status, data, loading, error, next, prev };
};
export default useFetch;
