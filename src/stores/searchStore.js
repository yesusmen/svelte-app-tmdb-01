import { writable } from 'svelte/store';

export const searchMoviesTotal = writable([]);
export const page = writable(1);
export const total_pages = writable(0);
export const total_results = writable(0);
export let query = writable('')

 async function fetchSearchMovie(query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API}&language=es-Es&query=${query}&page=${page}&include_adult=false`;
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

    searchMoviesTotal.set(loadedSearchMovie);
    page.set(data.page);
    total_pages.set(data.total_pages);
    total_results.set(data.total_results);
}

fetchSearchMovie(query);





