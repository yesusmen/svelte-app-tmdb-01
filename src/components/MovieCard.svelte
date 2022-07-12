<script>
    export let movie
    let sinImagen = '/img/sin_imagen.jpg'
</script>

<div class="movie-card">
    <a href={ `/movie/${movie.id}`} sveltekit:prefetch sveltekit:noscroll>
        {#if movie.poster_path != null}
            <img src={ `https://image.tmdb.org/t/p/w500${movie.poster_path}` } alt={movie.title}>
        {:else} 
            <img src={sinImagen} alt="sin imagen" class="sin-image" />   
        {/if}
    </a>
    <div class="description">
        <h2>{movie.title}</h2>
        <p>{new Date(movie.release_date).toDateString()}</p>
    </div>
</div>


<style>
   img {
    width: 100%;
    height: 45vh;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 1rem;
   }
   .sin-image{
    width: 100%;
    height: 250px;
   }
   h2 {
    font-size: 0.9rem;
   }
   .description{
    height: 5vh;
   }
   p {
    font-size: 0.7rem;
   }
   .movie-card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem;
   }

</style>

