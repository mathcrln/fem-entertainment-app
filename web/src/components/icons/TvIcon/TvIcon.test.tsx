import { render } from '@redwoodjs/testing/web'

import TvIcon from './TvIcon'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TvIcon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TvIcon />)
    }).not.toThrow()
  })
})
