import { render } from '@redwoodjs/testing/web'

import MovieIcon from './MovieIcon'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MovieIcon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MovieIcon />)
    }).not.toThrow()
  })
})
