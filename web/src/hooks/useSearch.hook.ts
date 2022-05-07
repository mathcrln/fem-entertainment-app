import { useState } from 'react';
import { Media } from 'types/media';

export default function useSearch(medias: Media[]) {
	const [search, setSearch] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
		const results = medias.filter((media) => media.title.toLowerCase().includes(e.target.value.toLowerCase()));
		setSearchResults(results);
	};
	return { search, searchResults, onSearch };
}
