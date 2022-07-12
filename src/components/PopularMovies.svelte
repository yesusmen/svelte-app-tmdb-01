<script>
import { onMount } from 'svelte';

import { fetchPopulateMovie, populateMovie, total_pages, total_results, page } from '../stores/populateStore';
import MovieCard from './MovieCard.svelte';
import SearchMovies from './SearchMovies.svelte';

onMount(() => {
    fetchPopulateMovie()
})

</script>

<div class="headers">
    <h3>Popular Movies</h3>
    <div class="totales">
        <p class="pages">Total de paginas: <strong>{ $total_pages }</strong></p>
        <p>Total de registros: <strong>{ $total_results }</strong></p>
    </div>
</div>


<SearchMovies />


<div class="popular-movies">
    {#each $populateMovie as movie}
        <MovieCard {movie} />
    {/each}
</div>

<style>
    .popular-movies {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
        margin-top: 2rem;
    }
    .headers {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
    }
    .totales {
        display: flex;
        align-items: center;
    }
    .pages {
        margin-right: 1rem;
    }
</style>
