import { Media } from 'types/media';
import BookmarkButton from '../BookmarkButton/BookmarkButton';

export enum Type {
	MOVIE = 'movie',
	TV = 'tv',
	BOOKMARK = 'bookmark',
}

export default function Card({ media, setBookmark }: { media: Media; setBookmark: (media: Media) => void }) {
	return (
		<div className='text-white'>
			<div className='bg-greyishBlue bg-opacity-50  aspect-video w-[100%] rounded-lg relative'>
				<img src={media.thumbnail.regular.medium} alt='' className='rounded-lg w-full' />
				<BookmarkButton isBookmarked={media.isBookmarked} onClick={() => setBookmark(media)} />
			</div>
			<div className='mt-4 mb-1 flex gap-2 text-white text-opacity-75'>
				<small>{media.year}</small>
				<small>•</small>
				<small>{media.category}</small>
				<small>•</small>
				<small>{media.rating}</small>
			</div>

			<h2 className='font-bold'>{media.title}</h2>
		</div>
	);
}
