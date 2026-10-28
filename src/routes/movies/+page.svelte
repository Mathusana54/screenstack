<script>
  import MovieCard from "#lib/components/MovieCard.svelte";
  let { data } = $props();
</script>

<p class="fst-italic">Daten und Bilder generiert mit KI</p>
<a href="/movies/create" class="btn btn-primary mb-3">Add New Movie</a>
<div class="row">
  {#each data.movies as movie}
    <div class="col-6 col-md-4 col-lg-3 mb-4">
      <MovieCard movie={movie} />
    </div>
  {/each}
</div>