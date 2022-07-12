<script>
import { fly } from 'svelte/transition'
import PopularMovies from "../components/PopularMovies.svelte";
</script>


<section class="container main" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <PopularMovies  />
</section>


<style>
    .main {
        margin-top: 2rem;
    }
</style>