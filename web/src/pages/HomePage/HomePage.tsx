import { MetaTags } from '@redwoodjs/web';
import SearchBar from 'src/components/SearchBar/SearchBar';
import CardList from 'src/components/CardList/CardList';
import SearchResults from 'src/components/SearchResults/SearchResults';
import FeaturedCard from 'src/components/FeaturedCard/FeaturedCard';
import useSearch from 'src/hooks/useSearch.hook';
import useMedias from 'src/hooks/useMedias.hook';

export default function HomePage() {
	const { medias } = useMedias();
	const { search, searchResults, onSearch } = useSearch(medias);

	return (
		<>
			<MetaTags title='Home' description='Home page' />
			<SearchBar text='Search for movies or TV series' handler={onSearch} />
			<SearchResults search={search} results={searchResults} />

			{!search && (
				<>
					<section>
						<h2 className='text-white font-light my-10 text-4xl'>Trending</h2>
						<div className='overflow-x-auto'>
							<div className='flex gap-10 '>
								{medias
									.filter((media) => media.isTrending)
									.map((media) => (
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
						<CardList list={medias.filter((media) => !media.isTrending)} />
					</section>
				</>
			)}
		</>
	);
}
