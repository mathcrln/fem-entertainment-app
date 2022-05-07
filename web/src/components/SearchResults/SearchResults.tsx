import { CardModel } from '../Card/Card';
import CardList from '../CardList/CardList';

const SearchResults = ({ search, results }: { search: string; results: CardModel[] }) => {
	if (!search || results.length === 0) return null;
	return (
		<section>
			<h2 className='text-white font-light my-10 text-4xl'>
				Found {results.length} results for {"'"}
				{search}
				{"'"}
			</h2>
			<CardList list={results} />
		</section>
	);
};

export default SearchResults;
