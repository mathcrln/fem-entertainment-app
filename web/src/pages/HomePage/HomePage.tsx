// import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import SearchBar from 'src/components/SearchBar/SearchBar';
// import Card from 'src/components/Card/Card';

export default function HomePage() {
	return (
		<>
			<MetaTags title='Home' description='Home page' />
			<SearchBar text='Search for movies or TV series' />
			<h1 className='text-white font-light my-10 text-4xl'>Trending</h1>
			{/* <section className='my-10 grid grid-cols-4 gap-10 w-full '>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</section> */}
		</>
	);
}
