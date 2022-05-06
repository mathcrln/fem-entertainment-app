import { MetaTags } from '@redwoodjs/web';
import SearchBar from 'src/components/SearchBar/SearchBar';
import Card, { CardModel } from 'src/components/Card/Card';
import { useEffect, useState } from 'react';

export type Thumbnail = {
	trending: {
		small: string;
		large: string;
	};
	regular: {
		small: string;
		medium: string;
		large: string;
	};
};
export type Media = {
	title: string;
	thumbnail: Thumbnail;
	year: number;
	rating: string;
	category: string;
	isBookmarked: boolean;
	isTrending: boolean;
};

export default function HomePage() {
	const [trending, setTrending] = useState([]);
	const [recommended, setRecommended] = useState([]);

	useEffect(() => {
		fetch('/data.json')
			.then((res) => res.json())
			.then((medias: Media[]) => {
				console.log('in promise');
				setTrending(medias.filter((media) => media.isTrending));
				setRecommended(medias.filter((media) => !media.isTrending));
			});
		console.log('rendered');
	}, []);
	return (
		<>
			<MetaTags title='Home' description='Home page' />
			<SearchBar text='Search for movies or TV series' />
			<section>
				<h2 className='text-white font-light my-10 text-4xl'>Trending</h2>
				<div className='overflow-x-auto'>
					<div className='flex gap-10 '>
						{trending.map((media) => (
							<FeaturedCard
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
				</div>
			</section>
			<section className=''>
				<h2 className='text-white font-light my-10 text-4xl'>Recommended for you</h2>
				<div className='my-10 grid grid-cols-2 md:grid-cols-4 gap-[15px] md:gap-10'>
					{recommended.map((media) => (
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
		</>
	);
}

function FeaturedCard({ title, thumbnail, rating, year, category }: CardModel) {
	return (
		<div className='aspect-video w-[300px] md:w-[470px] bg-red rounded-lg relative flex-shrink-0'>
			<img src={thumbnail.regular.medium} alt='' className='rounded-lg w-full ' />
			<div className='text-white absolute left-0 bottom-0 ml-5 mb-5'>
				<div className='mt-4 mb-1 flex gap-2 text-white text-opacity-75'>
					<small>{year}</small>
					<small>•</small>
					<small>{category}</small>
					<small>•</small>
					<small>{rating}</small>
				</div>
				<h3 className='text-2xl'>{title}</h3>
			</div>
		</div>
	);
}
