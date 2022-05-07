import { render } from '@redwoodjs/testing/web'

import SearchResults from './SearchResults'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SearchResults', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SearchResults />)
    }).not.toThrow()
  })
})
