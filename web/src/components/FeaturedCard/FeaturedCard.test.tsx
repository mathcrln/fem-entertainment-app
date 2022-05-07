import { render } from '@redwoodjs/testing/web'

import FeaturedCard from './FeaturedCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FeaturedCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeaturedCard />)
    }).not.toThrow()
  })
})
