import { useState, useEffect } from 'react';
import { Media } from 'types/media';

// type Filter = {
// 	category?: string;
// 	rating?: string;
// 	isBookmarked?: boolean;
// };

export default function useMedias() {
	const [medias, setMedias] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMedias = async () => {
		setLoading(true);
		setError(null);
		try {
			fetch('/data.json')
				.then((res) => res.json())
				.then((list: Media[]) => setMedias(list));
		} catch (error) {
			setError(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchMedias();
		return () => {};
	}, []);

	return { medias, loading, error };
}
