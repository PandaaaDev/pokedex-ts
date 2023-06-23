import { useState, useEffect } from 'react';
import { URLType } from 'types/main';
import axios, { AxiosError, AxiosResponse } from 'axios';
const useFetch = (url: URLType) => {
	const [response, setResponse] = useState<AxiosResponse>();
	const [error, setError] = useState<AxiosError>();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		const reason = new DOMException('clening up', 'AbortError');
		axios
			.get(url as string, { signal })
			.then((res) => {
				setResponse(res);
				setLoading(false);
			})
			.catch((error) => {
				if (error.code === 'ERR_CANCELED') return;
				console.error(error);
				setError(error);
			});

		return () => {
			controller.abort(reason);
		};
	}, [url]);
	return { response, loading, error };
};
export default useFetch;
