import { MetaTags } from '@redwoodjs/web';
import CardList from 'src/components/CardList/CardList';
import SearchBar from 'src/components/SearchBar/SearchBar';
import SearchResults from 'src/components/SearchResults/SearchResults';
import useMedias from 'src/hooks/useMedias.hook';
import useSearch from 'src/hooks/useSearch.hook';

const TvSeriesPage = () => {
	const { medias } = useMedias();

	const { search, searchResults, onSearch } = useSearch(medias.filter((media) => media.category === 'TV Series'));

	return (
		<>
			<MetaTags title='TvSeries' description='TvSeries page' />
			<SearchBar text='Search for TV Series' handler={onSearch} />
			<SearchResults search={search} results={searchResults} />
			{!search && (
				<section>
					<h1 className='text-white font-light my-10 text-4xl'>TV Series</h1>
					<CardList list={medias.filter((media) => media.category === 'TV Series')} />
				</section>
			)}
		</>
	);
};

export default TvSeriesPage;
