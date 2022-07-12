<script>
import { fly } from 'svelte/transition'
</script>


<div class="container" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <h1 class="title">Acerca de...</h1>
    
    <h2 class="text-product">!Hablemos de TMDB¡</h2>
    
    <p>
        La base de datos de películas <strong>(TMDB)</strong> es una base de datos de películas y TV creada por la comunidad. 
        Cada dato ha sido agregado por nuestra increíble comunidad desde 2008. El sólido enfoque internacional 
        de TMDb y la amplitud de los datos son en gran medida incomparables y es algo de lo que estamos 
        increíblemente orgullosos. En pocas palabras, vivimos y respiramos en comunidad y eso es precisamente 
        lo que nos hace diferentes.
    </p>
    
    <h2 class="text-product">¿Quién soy yo?</h2>
    
    <p>
        Soy ingeniero en informático, especializado en el desarrollo de aplicaciones móviles, de escritorio y web. 
        Aplicando las buenas prácticas de codificación y un entusiasta de las nuevas tecnologías. 
        Desde el 2020 he venido trabajando con diferentes framework, inclinándome a <strong>VUE, REACT. SVELTE, LARAVEL, ASP.NET, BLAZOR y TAILWINDCSS.</strong> 
        La tecnología utilizada para el desarrollo de esta app, son las siguientes: <strong>SVELTE, CSS, FETCH, y API REST.</strong> Creando el proyecto con <strong>VITE.JS</strong> 
    </p>
</div>

<style>
    .title {
        margin-top: 3rem;
    }
    .text-product {
        margin-top: 2rem;
        margin-bottom: 1rem;
    }
</style>