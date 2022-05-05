import BookmarkEmpty from 'public/icon-bookmark-empty.svg';

export default function Card() {
	return (
		<div className='text-white'>
			<div className='bg-greyishBlue bg-opacity-50 h-64 w-[100%] rounded-lg relative'>
				<img src='thumbnails/the-great-lands/regular/medium.jpg' alt='' className='rounded-lg w-full' />
				<div className='absolute right-3 top-3 bg-darkBlue bg-opacity-50 p-3 h-10 w-10 flex justify-center items-center rounded-[50%]'>
					<BookmarkEmpty />
				</div>
			</div>
			<div className='mt-4 mb-1 flex gap-2 text-white text-opacity-75'>
				<small>2019</small>
				<small>•</small>
				<small>Movie</small>
				<small>•</small>
				<small>PG</small>
			</div>

			<h2 className='font-bold'>The Great Lands</h2>
		</div>
	);
}
