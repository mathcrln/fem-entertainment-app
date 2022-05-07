import { Media } from 'types/media';

const SearchResults = ({ search, results, children }: { search: string; results: Media[]; children: React.ReactNode }) => {
	if (!search) return null;
	return (
		<section>
			<h2 className='text-white font-light my-10 text-4xl'>
				Found {results.length} results for {"'"}
				{search}
				{"'"}
			</h2>
			{children}
		</section>
	);
};

export default SearchResults;
