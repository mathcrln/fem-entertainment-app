import TvIcon from 'public/icon-nav-tv-series.svg';
import MoviesIcon from 'public/icon-nav-movies.svg';
import BookmarkIcon from 'public/icon-nav-bookmark.svg';
import HomeIcon from 'public/icon-nav-home.svg';
import Logo from 'public/logo.svg';

export default function Navigation() {
	return (
		<div className='bg-semiDarkBlue flex flex-col rounded-[20px] w-[96px] ml-10 h-[90vh] items-center justify-between'>
			<Logo className='mt-10' />
			<nav className='flex flex-col self-center gap-5'>
				<HomeIcon />
				<MoviesIcon />
				<TvIcon />
				<BookmarkIcon />
			</nav>
			<div className='rounded-full h-10 w-10 border-2 border-white  my-10' />
		</div>
	);
}
