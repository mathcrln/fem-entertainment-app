import { useState, useEffect } from 'react';
import { Media } from 'types/media';

export default function useMedias() {
	const [medias, setMedias] = useState<Media[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const setBookmark = (media: Media) => {
		const el = medias.find((m) => m.title === media.title);
		if (el) {
			el.isBookmarked = !el.isBookmarked;
			setMedias([...medias]);
			localStorage.setItem('medias', JSON.stringify(medias));
		}
	};

	useEffect(() => {
		setLoading(true);
		setError(null);
		try {
			const list = localStorage.getItem('medias');
			if (list) return setMedias(JSON.parse(list));

			fetch('/data.json')
				.then((res) => res.json())
				.then((list: Media[]) => {
					setMedias(list);
					localStorage.setItem('medias', JSON.stringify(list));
				});
		} catch (error) {
			console.log(error);
			setError(error);
		}
		setLoading(false);
		return () => {};
	}, []);

	return { medias, loading, error, setBookmark };
}
