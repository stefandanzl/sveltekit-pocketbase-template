<script lang="ts">
  import { page } from "$app/state";
</script>

<h1>{page.status}</h1>
<p>{page.error?.message}</p>

<style>
  p {
    margin-inline: auto;
    text-align: center;
  }
</style>
