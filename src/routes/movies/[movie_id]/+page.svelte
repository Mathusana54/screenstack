<script>
  let { data } = $props();
</script>

<a href="/movies">Back</a>
<h1>{data.movie.title}</h1>

<div class="row mt-3">
  <div class="col-md-4">
    <img src={data.movie.poster} class="img-fluid" alt={data.movie.title} />
  </div>
  <div class="col-md-8">
    <p>Jahr: {data.movie.year}</p>
    <p>Dauer: {data.movie.length}</p>
    <p>Cast:</p>
    <ul>
      {#each data.movie.actors as actor}
        <li>{actor}</li>
      {/each}
    </ul>
  </div>
</div>