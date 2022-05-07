import { CardModel } from '../Card/Card';

export default function FeaturedCard({ title, thumbnail, rating, year, category }: CardModel) {
	return (
		<div className='aspect-video w-[300px] md:w-[470px] bg-greyishBlue rounded-lg relative flex-shrink-0 isolate'>
			<img src={thumbnail.regular.medium} alt='' className='rounded-lg w-full ' />
			<div className='text-white absolute left-0 bottom-0 ml-5 mb-5'>
				<div className='mt-4 mb-1 flex gap-2 text-white text-opacity-75'>
					<small>{year}</small>
					<small>•</small>
					<small>{category}</small>
					<small>•</small>
					<small>{rating}</small>
				</div>
				<h3 className='text-2xl'>{title}</h3>
			</div>
		</div>
	);
}
