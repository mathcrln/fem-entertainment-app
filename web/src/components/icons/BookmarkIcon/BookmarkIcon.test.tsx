import { render } from '@redwoodjs/testing/web';

import BookmarkIcon from './BookmarkIcon';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BookmarkIcon', () => {
	it('renders successfully', () => {
		expect(() => {
			render(<BookmarkIcon />);
		}).not.toThrow();
	});
});
