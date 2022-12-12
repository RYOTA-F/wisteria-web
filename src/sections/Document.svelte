<script lang="ts">
  /* Components */
  import H2 from "@/components/H2.svelte"
  import H3 from "@/components/H3.svelte"
  /* Const */
  import DOCUMENT from '@/const/sections/document'
</script>

<section id="document" class="document">
  <H3>{DOCUMENT.TITLE_SUB}</H3>
  <H2>{DOCUMENT.TITLE_MAIN}</H2>
  <ul class="documentContainer">
    {#each DOCUMENT.ITEMS  as ITEM }
      <li class="documentItem">
        <a href={ITEM.URL} target="__brank">
          <img src={`images/documents/${ITEM.SRC}`} alt={ITEM.ALT} class="documentImage" />
        </a>
      </li>
    {/each}
  </ul>
</section>

<style>
  .document {
    width: 100%;
    min-height: 100vh;
    padding: 120px 10% 80px;
    text-align: center;
  }

  .documentContainer {
    margin: 40px 0;
  }

  .documentItem {
    margin: 0 auto;
    width: 60vw; /* 1.78 : 1 */
    height: 34vw;
    border-radius: 10px;
    overflow: hidden;
  }
  .documentItem:not(:first-child) {
    margin-top: 60px;
  }

  .documentImage {
    border-radius: 10px;
    transition: 0.3s all;
  }
  .documentImage:hover {
    transform: scale(1.05, 1.05);
    transition: 0.3s all;
    opacity: 0.7;
  }

  @media screen and (max-width: 600px) {
    .document {
      min-height: 0;
      padding: 40px 0;
    }
    .documentItem {
      width: 86vw; /* 1.78 : 1 */
      height: 48vw;
    }
    .documentItem:not(:first-child) {
      margin-top: 30px;
    }
  }
</style>
