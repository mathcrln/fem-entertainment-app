import { render } from '@redwoodjs/testing/web'

import TvSeriesPage from './TvSeriesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TvSeriesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TvSeriesPage />)
    }).not.toThrow()
  })
})
