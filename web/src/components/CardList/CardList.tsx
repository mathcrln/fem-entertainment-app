import { Media } from 'types/media';
import Card from '../Card/Card';

const CardList = ({ list, setBookmark }: { list: Media[]; setBookmark: (media: Media) => void }) => {
	return (
		<div className='my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] md:gap-10'>
			{list.length === 0 && <p className=' text-white text-opacity-80'>{"Aucun média n'a été trouvé."}</p>}
			{list.map((media) => (
				<Card key={media.title} media={media} setBookmark={setBookmark} />
			))}
		</div>
	);
};

export default CardList;
