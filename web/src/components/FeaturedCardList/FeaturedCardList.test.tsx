import { render } from '@redwoodjs/testing/web'

import FeaturedCardList from './FeaturedCardList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FeaturedCardList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeaturedCardList />)
    }).not.toThrow()
  })
})
