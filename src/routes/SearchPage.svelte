<script>
import { onMount } from 'svelte'
import Icon from 'svelte-icons-pack/Icon.svelte';
import HiSolidChevronLeft from "svelte-icons-pack/hi/HiSolidChevronLeft";
import HiSolidChevronRight from "svelte-icons-pack/hi/HiSolidChevronRight";

import MovieCard from '../components/MovieCard.svelte';
    
    export let name
    export let searchMovies = [];
    let page = 1
    let total_pages = 0
    let total_results = 0

    onMount( async () => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API}&language=es-Es&query=${name}&page=${page}&include_adult=false`;
        const res = await fetch(url);
        const data = await res.json();
        const loadedSearchMovie = data.results.map((data) => {
            return {
                id: data.id,
                title: data.title,
                original_title: data.original_title,
                popularity: data.popularity,
                poster_path: data.poster_path,
                release_date: data.release_date
            }
        });
        searchMovies = loadedSearchMovie
        page = data.page
        total_pages = data.total_pages
        total_results = data.total_results
    })

    const pageNext = () => {
        if(page < total_pages){
            page++
            onchangePage(page)
        }
    } 

    const pagePreview = () => {
        if (page > 1){
            page--
            onchangePage(page)
        }
    }

    const onchangePage = async (page) => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API}&language=es-Es&query=${name}&page=${page}&include_adult=false`;
        const res = await fetch(url);
        const data = await res.json();
        const loadedSearchMovie = data.results.map((data) => {
            return {
                id: data.id,
                title: data.title,
                original_title: data.original_title,
                popularity: data.popularity,
                poster_path: data.poster_path,
                release_date: data.release_date
            }
        });
        searchMovies = loadedSearchMovie
        page = data.page
    }
</script>

<section class="container">
    <div class="paginate">
        <button on:click|preventDefault={pagePreview} class="btn-icon">
            <Icon src={HiSolidChevronLeft} size="35"/>   
        </button>
        <p class="text-item">{page} to {total_pages}</p>
        <button on:click|preventDefault={pageNext} class="btn-icon">
            <Icon  src={HiSolidChevronRight} size="35"/>
        </button>
    </div>
    <div class="searched-movies">
        {#each searchMovies as movie }
            <MovieCard {movie} />
        {/each}
    </div>    
</section>

<style>
    .searched-movies {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        column-gap: 1rem;
        row-gap: 2rem;
        height: 20vh;
        margin: 1rem 0 4rem 0;
    }
    .paginate {
        display: flex;
        align-items: center;
        justify-content: end;
        margin-top: 2rem;
    }
    .btn-icon {
        background: black;
        border: none;
        border-radius: 100%;
        padding: 0rem;
        margin: 0.5rem;
        display: flex;
        align-items: center;
        justify-items: center;
    }
    .text-item {
        padding: 0.2rem;
        margin: 0;
        font-size: 1rem;
        font-weight: bold;
    }
</style>