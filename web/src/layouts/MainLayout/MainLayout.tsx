import Navigation from 'src/components/Navigation/Navigation';

type MainLayoutProps = {
	children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div className='flex flex-col md:flex-row md:pt-10 relative'>
			<Navigation className='mb-10 md:mb-initial' />
			<div className=' w-full px-10'>{children}</div>
		</div>
	);
};

export default MainLayout;
