import Navigation from 'src/components/Navigation/Navigation';

type MainLayoutProps = {
	children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div className='flex flex-col lg:flex-row lg:pt-10 bg-darkBlue relative'>
			<Navigation className='mb-10 md:w-11/12 md:mx-auto lg:mb-initial flex-shrink-0' />
			<div className='mx-auto w-11/12 px-3 lg:px-10 flex-grow'>{children}</div>
		</div>
	);
};

export default MainLayout;
