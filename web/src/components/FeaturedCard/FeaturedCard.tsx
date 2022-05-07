import { Media } from 'types/media';
import BookmarkButton from '../BookmarkButton/BookmarkButton';

export default function FeaturedCard({ media, setBookmark }: { media: Media; setBookmark: (media: Media) => void }) {
	return (
		<div className='aspect-video w-[300px] md:w-[470px] bg-greyishBlue rounded-lg relative flex-shrink-0 isolate'>
			<img src={media.thumbnail.regular.medium} alt='' className='rounded-lg w-full ' />
			<BookmarkButton isBookmarked={media.isBookmarked} onClick={() => setBookmark(media)} />
			<div className='text-white absolute left-0 bottom-0 ml-5 mb-5'>
				<div className='mt-4 mb-1 flex gap-2 text-white text-opacity-75'>
					<small>{media.year}</small>
					<small>•</small>
					<small>{media.category}</small>
					<small>•</small>
					<small>{media.rating}</small>
				</div>
				<h3 className='text-2xl'>{media.title}</h3>
			</div>
		</div>
	);
}
