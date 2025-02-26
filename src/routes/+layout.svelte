<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import "../app.css";

  let { children, data } = $props();
</script>

<div>
  <Header />
  <main>
    {#if data.user?.avatar}
      <img
        alt={data.user.name}
        src="https://www.omlet.co.uk/images/cache/850/567/worlds_most_popular_pet_bird.webp"
        title={data.user.name}
      />
    {:else if data.user}
      <!-- logged in but no avatar -->
      <img alt="lotus flower" src="https://www.omlet.co.uk/images/cache/850/567/worlds_most_popular_pet_bird.webp" />
    {:else}
      <img alt="lotus flower" src="https://www.omlet.co.uk/images/cache/850/567/worlds_most_popular_pet_bird.webp" />
    {/if}

    {@render children()}
  </main>

  <Footer />
</div>

<style>
  div {
    min-height: 100vh;
    min-height: 100dvh; /* better for mobile? */
    min-width: 380px;

    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 1rem;

    background-color: var(--surface-1);
  }

  main {
    margin-inline: auto;
    /* width: min(calc(100% - 2rem), 66ch); */
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  main > img {
    margin-inline: auto;
    width: 11rem;
    border-radius: 50%;
  }
</style>
