import { Link, navigate, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import { FormEvent } from 'react';

const SignupPage = () => {
	const onConfirm = (e: FormEvent) => {
		e.preventDefault();
		navigate(routes.home());
	};
	return (
		<>
			<MetaTags title='Signup' description='Signup page' />

			<h1 className='text-3xl font-light'>Signup</h1>

			<form className='mt-10' onSubmit={(e) => onConfirm(e)}>
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
				<div className='mb-3'>
					<input
						className='bg-transparent border-b border-white w-full p-4'
						id='repeat-password'
						type='password'
						placeholder='Repeat Password'
					/>
				</div>
				<button
					type='submit'
					className='w-full bg-red hover:bg-white text-white py-3 rounded-[6px] hover:text-black my-5'
				>
					Login to your account
				</button>
			</form>
			<p className='text-center'>
				{'Already have an account? '}
				<Link to={routes.login()} className='text-red hover:underline'>
					Login
				</Link>
			</p>
		</>
	);
};

export default SignupPage;
