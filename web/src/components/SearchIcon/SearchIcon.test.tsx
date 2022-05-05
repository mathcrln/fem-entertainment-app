import { render } from '@redwoodjs/testing/web'

import SearchIcon from './SearchIcon'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SearchIcon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SearchIcon />)
    }).not.toThrow()
  })
})
