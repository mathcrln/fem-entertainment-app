import { render } from '@redwoodjs/testing/web'

import SearchLayout from './SearchLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SearchLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SearchLayout />)
    }).not.toThrow()
  })
})
