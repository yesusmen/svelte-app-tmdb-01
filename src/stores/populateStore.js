// `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API}&language=en-US&page=1`
// `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API}&language=es-ES&page=1`

import { writable } from "svelte/store"
export const populateMovie = writable([])
export const total_pages = writable(0)
export const total_results = writable(0)
export const page = writable(2)
let pag = 40

export const fetchPopulateMovie = async () => {

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API}&language=es-ES&page=${1}`
    const res = await fetch(url)
    const data = await res.json()
    const loadedMovie = data.results.map((data) => {
        return {
            id: data.id,
            title: data.title,
            original_title: data.original_title,
            popularity: data.popularity,
            poster_path: data.poster_path,
            release_date: data.release_date
        }
    })

    populateMovie.set(loadedMovie)
    total_pages.set(data.total_pages)
    total_results.set(data.total_results)
    page.set(data.page)

    console.log(pag)
}

//fetchPopulateMovie()

 