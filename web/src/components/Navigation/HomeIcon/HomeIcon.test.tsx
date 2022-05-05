import { render } from '@redwoodjs/testing/web'

import HomeIcon from './HomeIcon'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HomeIcon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeIcon />)
    }).not.toThrow()
  })
})
