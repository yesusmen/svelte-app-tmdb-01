 
<script>
import { Router, Route, Link } from 'svelte-routing'
import HomePage from './routes/HomePage.svelte'
import AboutPage from './routes/AboutPage.svelte'
import SearchPage from './routes/SearchPage.svelte'
import MoviePage from './routes/MoviePage.svelte'

let Logo = '/img/svelte.png'
</script>

<svelte:head>
    <title>Movie DB Svelte</title>
</svelte:head>

<main>
  <Router>
    <nav class="navbar">
      <div class="container nav">
        <div class="brand">
          <img src={Logo} alt="logo svelte">
          <h4>TMDB</h4>
        </div>
        <div class="nav-item">
          <Link to="/" class="item-link">Home</Link>
          <Link to="/about" class="item-link">About</Link>
        </div>
      </div>
    </nav>

    <Route path="/">
      <HomePage />
    </Route>

    <Route path="/about">
      <AboutPage />
    </Route>

    <Route path="/search/:name" let:params>
      <SearchPage name={ params.name } />
    </Route>

    <Route path="/movie/:id" let:params>
      <MoviePage id={ params.id } />
    </Route>

  </Router>
</main>


<style>

</style>
