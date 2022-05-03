import Navigation from 'src/components/Navigation/Navigation';

type MainLayoutProps = {
	children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div className='flex mt-10'>
			<Navigation />
			<div className=' w-full px-10'>{children}</div>
		</div>
	);
};

export default MainLayout;
