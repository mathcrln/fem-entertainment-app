import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

const LoginPage = () => {
	return (
		<>
			<MetaTags title='Login' description='Login page' />

			<h1 className='text-3xl font-light'>Login</h1>

			<form className='mt-10'>
				<div className='mb-3'>
					<input
						className='bg-transparent border-b border-white w-full p-4'
						id='email'
						type='email'
						placeholder='Email'
					/>
				</div>
				<div className='mb-3'>
					<input
						className='bg-transparent border-b border-white w-full p-4'
						id='password'
						type='password'
						placeholder='Password'
					/>
				</div>

				<button
					type='submit'
					className='w-full bg-red hover:bg-white py-3 rounded-[6px] text-white hover:text-black my-5'
				>
					Login to your account
				</button>
			</form>
			<p className='text-center'>
				{"Don't have an account? "}
				<Link to={routes.signup()} className='text-red hover:underline'>
					Sign up
				</Link>
			</p>
		</>
	);
};

export default LoginPage;
