import SearchIcon from '../SearchIcon/SearchIcon';

const SearchBar = ({ text, className, handler }: { text: string; className?: string; handler: (e) => void }) => {
	return (
		<div className={`flex gap-4 items-center relative h-10 pl-12  ${className} `}>
			<SearchIcon className='w-8 h-8 absolute left-0' />
			<input
				placeholder={text}
				className='text-white bg-transparent h-full w-full outline-none focus:border-b border-greyishBlue'
				onChange={(e) => handler(e)}
			/>
		</div>
	);
};

export default SearchBar;
