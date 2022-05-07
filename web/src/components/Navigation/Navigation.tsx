import { Link, NavLink, routes } from '@redwoodjs/router';
import Logo from 'public/logo.svg';
import { BookmarkIconMenu } from '../icons/BookmarkIcon/BookmarkIcon';
import HomeIcon from './HomeIcon/HomeIcon';
import MovieIcon from '../icons/MovieIcon/MovieIcon';
import TvIcon from '../icons/TvIcon/TvIcon';

export default function Navigation({ className }: { className?: string }) {
	return (
		<div
			className={`lg:sticky lg:top-5 top-0 md:mt-5 bg-semiDarkBlue md:rounded-[20px] flex lg:flex-col w-full h-14 md:h-[72px] lg:w-[96px] lg:ml-10 lg:h-[90vh] items-center justify-between ${className}`}
		>
			<Link to={routes.home()}>
				<Logo className='ml-4 lg:ml-0 lg:mt-10' />
			</Link>
			<nav className='flex lg:flex-col  gap-5 text-greyishBlue'>
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
					<BookmarkIconMenu className='hover:text-red' />
				</NavLink>
			</nav>

			<Link to={routes.login()} className='mr-4 lg:mr-0 rounded-full h-8 w-8 md:h-10 md:w-10 border-2 border-white  my-10'>
				<img src='/image-avatar.png' alt='' />
			</Link>
		</div>
	);
}
