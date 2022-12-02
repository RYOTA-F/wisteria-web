<script lang="ts">
  /* Const */
  import SCROLL_Y from "@src/const/scrollY"
  /* Methods */
  const onClickScroll = () => window.scroll({top: 0, behavior: 'smooth'});

  /* State */
  let scrollY: number
</script>

<svelte:window bind:scrollY={scrollY}/>

{#if scrollY > SCROLL_Y}
  <button on:click={onClickScroll} class="scrollButton">
    <div class="scrollButton__innnerArrow" />
  </button>
{/if}

<style>
  .scrollButton {
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    color: #fff;
    background-color: #0c328c;
    cursor: pointer;
  }
  .scrollButton:hover {
    background-color: #fff;
    transition: 0.2s;
  }
  .scrollButton:hover > div {
    border-color: #0c328c;
  }

  .scrollButton__innnerArrow {
    position: absolute;
    right: 50%;
    top: 50%;
    display: block;
    width: 16px;
    height: 16px;
    margin-right: -8px;
    margin-top: -5px;
    content: "";
    border-bottom: 4px solid #fff;
    border-left: 4px solid #fff;
    transform: rotate(135deg);
  }

  @media screen and (max-width: 600px) {
    .scrollButton {
      bottom: 10px;
      right: 10px;
      width: 40px;
      height: 40px;
    }
  }
</style>