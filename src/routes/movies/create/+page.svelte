<script>
  let { form } = $props();
</script>

<a href="/movies">Back</a>
<h1>Add a Movie</h1>

<form method="POST" action="?/create">
  <div class="mb-3">
    <label class="form-label">Name</label>
    <input name="title" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label class="form-label">Year</label>
    <input name="year" class="form-control" type="number" />
  </div>
  <div class="mb-3">
    <label class="form-label">Length</label>
    <input name="length" class="form-control" type="text" />
  </div>
  <button type="submit" class="btn btn-primary">Add Movie</button>
</form>

{#if form?.success}
  <p class="mt-3">Movie created</p>
{/if}