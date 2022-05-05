import { Link, NavLink, routes } from '@redwoodjs/router';
import Logo from 'public/logo.svg';
import BookmarkIcon from '../icons/BookmarkIcon/BookmarkIcon';
import HomeIcon from './HomeIcon/HomeIcon';
import MovieIcon from '../icons/MovieIcon/MovieIcon';
import TvIcon from '../icons/TvIcon/TvIcon';

export default function Navigation({ className }: { className?: string }) {
	return (
		<div
			className={`sticky top-0 md:top-5 bg-semiDarkBlue md:rounded-[20px] flex md:flex-col w-full h-14 md:w-[96px] md:ml-10 md:h-[90vh] items-center justify-between ${className}`}
		>
			<Link to={routes.home()}>
				<Logo className='ml-4 md:ml-0 md:mt-10' />
			</Link>
			<nav className='flex md:flex-col self-center gap-5 text-greyishBlue'>
				<NavLink activeClassName='text-white' to={routes.home()}>
					<HomeIcon className='hover:text-red' />
				</NavLink>
				<NavLink activeClassName='text-white' to={routes.movies()}>
					<MovieIcon className='hover:text-red' />
				</NavLink>
				<NavLink activeClassName='text-white' to={routes.tvSeries()}>
					<TvIcon className='hover:text-red' />
				</NavLink>
				<NavLink activeClassName='text-white' to={routes.bookmarked()}>
					<BookmarkIcon className='hover:text-red' />
				</NavLink>
			</nav>
			<div className='mr-4 rounded-full h-8 w-8 md:h-10 md:w-10 border-2 border-white  my-10' />
		</div>
	);
}
