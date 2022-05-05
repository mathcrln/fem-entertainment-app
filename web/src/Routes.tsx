// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import MainLayout from './layouts/MainLayout/MainLayout';

const Routes = () => {
	return (
		<Router>
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
