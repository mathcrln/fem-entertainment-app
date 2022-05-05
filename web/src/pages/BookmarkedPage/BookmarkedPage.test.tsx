import { render } from '@redwoodjs/testing/web'

import BookmarkedPage from './BookmarkedPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BookmarkedPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BookmarkedPage />)
    }).not.toThrow()
  })
})
