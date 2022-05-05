// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router';
import MediasLayout from 'src/layouts/MediasLayout';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import MainLayout from './layouts/MainLayout/MainLayout';

const Routes = () => {
	return (
		<Router>
			<Set wrap={MediasLayout}>
				<Route path='/medias/new' page={MediaNewMediaPage} name='newMedia' />
				<Route path='/medias/{id:Int}/edit' page={MediaEditMediaPage} name='editMedia' />
				<Route path='/medias/{id:Int}' page={MediaMediaPage} name='media' />
				<Route path='/medias' page={MediaMediasPage} name='medias' />
			</Set>
			<AuthLayout>
				<Route path='/signup' page={SignupPage} name='signup' />
				<Route path='/login' page={LoginPage} name='login' />
			</AuthLayout>
			<MainLayout>
				<Route path='/' page={HomePage} name='home' />
				<Route path='/movies' page={MoviesPage} name='movies' />
				<Route path='/tv-series' page={TvSeriesPage} name='tvSeries' />
				<Route path='/bookmarked' page={BookmarkedPage} name='bookmarked' />
				<Route notfound page={NotFoundPage} />
			</MainLayout>
		</Router>
	);
};

export default Routes;
