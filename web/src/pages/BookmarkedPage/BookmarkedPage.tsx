import { MetaTags } from '@redwoodjs/web';
import CardList from 'src/components/CardList/CardList';
import SearchBar from 'src/components/SearchBar/SearchBar';
import SearchResults from 'src/components/SearchResults/SearchResults';
import useMedias from 'src/hooks/useMedias.hook';
import useSearch from 'src/hooks/useSearch.hook';

const BookmarkedPage = () => {
	const { medias, setBookmark } = useMedias();
	const { search, searchResults, onSearch } = useSearch(medias);

	return (
		<>
			<MetaTags title='Bookmarked' description='Bookmarked page' />
			<SearchBar text='Search for Bookmarked shows' handler={onSearch} />
			<SearchResults search={search} results={searchResults}>
				<CardList list={searchResults} setBookmark={setBookmark} />
			</SearchResults>
			{!search && (
				<>
					<section>
						<h2 className='text-white font-light my-10 text-4xl'>Bookmarked Movies</h2>
						<CardList
							list={medias.filter((media) => media.category === 'Movie' && media.isBookmarked)}
							setBookmark={setBookmark}
						/>
					</section>
					<section>
						<h2 className='text-white font-light my-10 text-4xl'>Bookmarked TV Series</h2>
						<CardList
							list={medias.filter((media) => media.category === 'TV Series' && media.isBookmarked)}
							setBookmark={setBookmark}
						/>
					</section>
				</>
			)}
		</>
	);
};

export default BookmarkedPage;
