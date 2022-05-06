import { MetaTags } from '@redwoodjs/web';
import { useState, useEffect } from 'react';
import Card from 'src/components/Card/Card';
import SearchBar from 'src/components/SearchBar/SearchBar';
import { Media } from '../HomePage/HomePage';

const TvSeriesPage = () => {
	const [medias, setMedias] = useState([]);
	useEffect(() => {
		fetch('/data.json')
			.then((res) => res.json())
			.then((medias: Media[]) => {
				setMedias(medias.filter((media) => media.category === 'TV Series'));
			});
	}, []);
	return (
		<>
			<MetaTags title='TvSeries' description='TvSeries page' />
			<SearchBar text='Search for TV Series' />
			<h1 className='text-white font-light my-10 text-4xl'>TV Series</h1>

			<div className='my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] md:gap-10'>
				{medias.map((media) => (
					<Card
						key={media.title}
						title={media.title}
						category={media.category}
						thumbnail={media.thumbnail}
						rating={media.rating}
						year={media.year}
						isBookmarked={media.isBookmarked}
					/>
				))}
			</div>
		</>
	);
};

export default TvSeriesPage;
