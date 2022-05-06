import { MetaTags } from '@redwoodjs/web';
import { useEffect, useState } from 'react';
import Card from 'src/components/Card/Card';
import SearchBar from 'src/components/SearchBar/SearchBar';
import { Media } from '../HomePage/HomePage';

const BookmarkedPage = () => {
	const [movies, setMovies] = useState([]);
	const [tvSeries, setTvSeries] = useState([]);
	useEffect(() => {
		fetch('/data.json')
			.then((res) => res.json())
			.then((medias: Media[]) => {
				setMovies(medias.filter((media) => media.category === 'Movie' && media.isBookmarked));
				setTvSeries(medias.filter((media) => media.category === 'TV Series' && media.isBookmarked));
			});
	}, []);

	return (
		<>
			<MetaTags title='Bookmarked' description='Bookmarked page' />
			<SearchBar text='Search for Bookmarked shows' />
			<section>
				<h2 className='text-white font-light my-10 text-4xl'>Bookmarked Movies</h2>
				<div className='my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] md:gap-10'>
					{movies.map((media) => (
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
			</section>
			<section>
				<h2 className='text-white font-light my-10 text-4xl'>Bookmarked TV Series</h2>
				<div className='my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] md:gap-10'>
					{tvSeries.map((media) => (
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
			</section>{' '}
		</>
	);
};

export default BookmarkedPage;
