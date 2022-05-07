import BookmarkIcon from '../icons/BookmarkIcon/BookmarkIcon';

const BookmarkButton = ({ isBookmarked, onClick }: { isBookmarked: boolean; onClick: () => void }) => {
	return (
		<button
			onClick={() => onClick()}
			className='text-white cursor-pointer absolute right-3 top-3 bg-darkBlue bg-opacity-50 p-3 h-10 w-10 flex justify-center items-center rounded-[50%]'
		>
			<BookmarkIcon empty={!isBookmarked} />
		</button>
	);
};

export default BookmarkButton;
