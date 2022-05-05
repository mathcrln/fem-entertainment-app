import Logo from 'src/components/icons/Logo/Logo';

type AuthLayoutProps = {
	children?: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
	return (
		<div className='bg-darkBlue flex flex-col items-center'>
			<Logo className='my-20' />

			<div className='bg-semiDarkBlue w-11/12 md:w-[400px] rounded-lg text-white p-10'>{children}</div>
		</div>
	);
};

export default AuthLayout;
