<script>
  let { children } = $props();
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">ScreenStack</a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/movies">Movies</a>
      </li>
    </ul>
  </div>
</nav>

<div class="container mt-4">
  {@render children()}
</div>

<style>
  :global(body) {
    background-color: black;
  }
</style>