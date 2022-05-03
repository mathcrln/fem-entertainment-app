import { render } from '@redwoodjs/testing/web'

import MoviesPage from './MoviesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MoviesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MoviesPage />)
    }).not.toThrow()
  })
})
