import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MoviesPage = () => {
  return (
    <>
      <MetaTags title="Movies" description="Movies page" />

      <h1>MoviesPage</h1>
      <p>
        Find me in <code>./web/src/pages/MoviesPage/MoviesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>movies</code>, link to me with `
        <Link to={routes.movies()}>Movies</Link>`
      </p>
    </>
  )
}

export default MoviesPage
