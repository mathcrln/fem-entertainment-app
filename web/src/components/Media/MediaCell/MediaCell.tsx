import type { FindMediaById } from 'types/graphql';
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';

import Media from 'src/components/Media/Media';

export const QUERY = gql`
	query FindMediaById($id: Int!) {
		media: media(id: $id) {
			id
			title
			rating
			year
			category
			isTrending
		}
	}
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Media not found</div>;

export const Failure = ({ error }: CellFailureProps) => <div className='rw-cell-error'>{error.message}</div>;

export const Success = ({ media }: CellSuccessProps<FindMediaById>) => {
	return <Media media={media} />;
};
