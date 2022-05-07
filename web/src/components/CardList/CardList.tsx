import Card, { CardModel } from '../Card/Card';

const CardList = ({ list }: { list: CardModel[] }) => {
	return (
		<div className='my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] md:gap-10'>
			{list.map((media) => (
				<Card
					key={media.title}
					title={media.title}
					category={media.category}
					thumbnail={media.thumbnail}
					rating={media.rating}
					year={media.year}
					isBookmarked={media.isBookmarked}
				/>
			))}
		</div>
	);
};

export default CardList;
