import { render } from '@redwoodjs/testing/web'

import BookmarkButton from './BookmarkButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BookmarkButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BookmarkButton />)
    }).not.toThrow()
  })
})
