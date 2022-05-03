// import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import Card from 'src/components/Card/Card';

export default function HomePage() {
	return (
		<>
			<MetaTags title='Home' description='Home page' />
			<h1 className='text-white text-4xl'>Trending</h1>
			<section className='my-10 grid grid-cols-4 gap-10 w-full '>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</section>
		</>
	);
}
