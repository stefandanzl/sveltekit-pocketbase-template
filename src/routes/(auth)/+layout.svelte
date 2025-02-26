<script lang="ts">
  let { children, data } = $props();
</script>

<article>
  {@render children()}
</article>

<style>
  article {
    margin-inline: auto;
    width: 50ch;
  }
</style>
