import BookmarkEmpty from 'public/icon-bookmark-empty.svg';
import { Thumbnail } from 'types/Thumbnail';

export enum Type {
	MOVIE = 'movie',
	TV = 'tv',
	BOOKMARK = 'bookmark',
}

export type CardModel = {
	title: string;
	thumbnail: Thumbnail;
	rating: string;
	year: number;
	category: Type;
	isBookmarked: boolean;
};

export default function Card({ title, thumbnail, rating, year, category }: CardModel) {
	return (
		<div className='text-white'>
			<div className='bg-greyishBlue bg-opacity-50  aspect-video w-[100%] rounded-lg relative'>
				<img src={thumbnail.regular.medium} alt='' className='rounded-lg w-full' />
				<div className='cursor-pointer absolute right-3 top-3 bg-darkBlue bg-opacity-50 p-3 h-10 w-10 flex justify-center items-center rounded-[50%]'>
					<BookmarkEmpty />
				</div>
			</div>
			<div className='mt-4 mb-1 flex gap-2 text-white text-opacity-75'>
				<small>{year}</small>
				<small>•</small>
				<small>{category}</small>
				<small>•</small>
				<small>{rating}</small>
			</div>

			<h2 className='font-bold'>{title}</h2>
		</div>
	);
}
