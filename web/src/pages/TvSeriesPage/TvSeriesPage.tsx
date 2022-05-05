import { MetaTags } from '@redwoodjs/web';
import SearchBar from 'src/components/SearchBar/SearchBar';

const TvSeriesPage = () => {
	return (
		<>
			<MetaTags title='TvSeries' description='TvSeries page' />
			<SearchBar text='Search for TV Series' />
			<h1 className='text-white font-light my-10 text-4xl'>TV Series</h1>
		</>
	);
};

export default TvSeriesPage;
