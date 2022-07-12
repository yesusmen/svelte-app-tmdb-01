<script>

import { onMount } from "svelte";
import { fly } from 'svelte/transition'

export let id;
export let movieDetail = {};

let sinImagen = '/img/sin_imagen.jpg'

onMount( async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API}&language=es-ES`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    movieDetail = data;
});

</script>


<main class="container">
    <div class="movie-details" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
        <div class="img-container">
            {#if movieDetail.backdrop_path != null}
                <img src={ `https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}` } alt={ movieDetail.title }>
            {:else}
                <img src={sinImagen} alt="sin imagen" class="sin-image" />
            {/if}
        </div>
        <div class="text-container">
            <h1>{ movieDetail.title }</h1>
            <p class="overview">{ movieDetail.overview }</p>
            <p>
                <span>Release date:</span>
                { movieDetail.release_date } <br />
                <span>Budget:</span> { movieDetail.budget } <br/>
                <span>Rating:</span> { movieDetail.vote_average } <br/>
                <span>Runtime: </span> { movieDetail.runtime }mins
            </p>
        </div>
    </div>
</main>

<style>
    
   h1 {
        padding: 1rem 0rem 2rem;
    }
    p {
        padding: 1rem 0rem;
    }
    .img-container {
        width: 100%;
    }
    img {
        width: 100%;
        border-radius: 1rem;
    }
    .movie-details {
      margin: 2rem 20%;  
    }
    span {
        font-weight: bold;
    }

</style>