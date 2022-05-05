import { MetaTags } from '@redwoodjs/web';
import SearchBar from 'src/components/SearchBar/SearchBar';

const MoviesPage = () => {
	return (
		<>
			<MetaTags title='Movies' description='Movies page' />
			<SearchBar text='Search for movies' />
			<h1 className='text-white font-light my-10 text-4xl'>Movies</h1>
		</>
	);
};

export default MoviesPage;
