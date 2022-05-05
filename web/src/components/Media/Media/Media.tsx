import humanize from 'humanize-string';

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_MEDIA_MUTATION = gql`
	mutation DeleteMediaMutation($id: Int!) {
		deleteMedia(id: $id) {
			id
		}
	}
`;

const formatEnum = (values: string | string[] | null | undefined) => {
	if (values) {
		if (Array.isArray(values)) {
			const humanizedValues = values.map((value) => humanize(value));
			return humanizedValues.join(', ');
		} else {
			return humanize(values as string);
		}
	}
};

const jsonDisplay = (obj) => {
	return (
		<pre>
			<code>{JSON.stringify(obj, null, 2)}</code>
		</pre>
	);
};

const timeTag = (datetime) => {
	return (
		datetime && (
			<time dateTime={datetime} title={datetime}>
				{new Date(datetime).toUTCString()}
			</time>
		)
	);
};

const checkboxInputTag = (checked) => {
	return <input type='checkbox' checked={checked} disabled />;
};

const Media = ({ media }) => {
	const [deleteMedia] = useMutation(DELETE_MEDIA_MUTATION, {
		onCompleted: () => {
			toast.success('Media deleted');
			navigate(routes.medias());
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	const onDeleteClick = (id) => {
		if (confirm('Are you sure you want to delete media ' + id + '?')) {
			deleteMedia({ variables: { id } });
		}
	};

	return (
		<>
			<div className='rw-segment'>
				<header className='rw-segment-header'>
					<h2 className='rw-heading rw-heading-secondary'>Media {media.id} Detail</h2>
				</header>
				<table className='rw-table'>
					<tbody>
						<tr>
							<th>Id</th>
							<td>{media.id}</td>
						</tr>
						<tr>
							<th>Title</th>
							<td>{media.title}</td>
						</tr>
						<tr>
							<th>Rating</th>
							<td>{media.rating}</td>
						</tr>
						<tr>
							<th>Year</th>
							<td>{media.year}</td>
						</tr>
						<tr>
							<th>Category</th>
							<td>{media.category}</td>
						</tr>
						<tr>
							<th>Is trending</th>
							<td>{checkboxInputTag(media.isTrending)}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<nav className='rw-button-group'>
				<Link to={routes.editMedia({ id: media.id })} className='rw-button rw-button-blue'>
					Edit
				</Link>
				<button type='button' className='rw-button rw-button-red' onClick={() => onDeleteClick(media.id)}>
					Delete
				</button>
			</nav>
		</>
	);
};

export default Media;
