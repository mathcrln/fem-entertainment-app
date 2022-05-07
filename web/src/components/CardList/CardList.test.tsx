import { render } from '@redwoodjs/testing/web'

import CardList from './CardList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CardList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CardList />)
    }).not.toThrow()
  })
})
