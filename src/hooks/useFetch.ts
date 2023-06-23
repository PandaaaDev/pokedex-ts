import { useState, useEffect } from 'react';
import { URLType } from 'types/main';
import axios from 'axios';

const useFetch = (url: URLType) => {
	const [data, setData] = useState<any>();
	const [error, setError] = useState<any>();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		const reason = new DOMException('clening up', 'AbortError');
		axios
			.get(url as string, { signal })
			.then((res) => {
				setData(res.data);
				setLoading(false);
				console.log(res);
			})
			.catch((error) => {
				console.error(error);
				if (error.code === 'ERR_CANCELED') return;
				setError(error);
			});

		return () => {
			controller.abort(reason);
		};
	}, [url]);
	return { data, loading, error };
};
export default useFetch;
