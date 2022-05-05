import { MetaTags } from '@redwoodjs/web';
import SearchBar from 'src/components/SearchBar/SearchBar';

const BookmarkedPage = () => {
	return (
		<>
			<MetaTags title='Bookmarked' description='Bookmarked page' />
			<SearchBar text='Search for Bookmarked shows' />
			<h1 className='text-white font-light my-10 text-4xl'>Bookmarked Movies</h1>
			<h1 className='text-white font-light my-10 text-4xl'>Bookmarked TV Series</h1>
		</>
	);
};

export default BookmarkedPage;
