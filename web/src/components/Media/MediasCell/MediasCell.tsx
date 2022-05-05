import type { FindMedias } from 'types/graphql';
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';

import { Link, routes } from '@redwoodjs/router';

import Medias from 'src/components/Media/Medias';

export const QUERY = gql`
	query FindMedias {
		medias {
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

export const Empty = () => {
	return (
		<div className='rw-text-center'>
			{'No medias yet. '}
			<Link to={routes.newMedia()} className='rw-link'>
				{'Create one?'}
			</Link>
		</div>
	);
};

export const Failure = ({ error }: CellFailureProps) => <div className='rw-cell-error'>{error.message}</div>;

export const Success = ({ medias }: CellSuccessProps<FindMedias>) => {
	return <Medias medias={medias} />;
};
