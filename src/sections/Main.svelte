<script lang="ts" type="module">
	import { onMount } from 'svelte'
  /* Const */
  import MAIN from '@src/const/sections/main'
  import COLOR from '@src/const/color'
  /* Libs */
  import { moveInWelcomeMessage } from '@/lib/gsap/welcomeMessage'

  onMount(() => {
    moveInWelcomeMessage()
  })
</script>

<section
  id="main"
  class="main"
  style:background={`linear-gradient(${COLOR.THEME.BLUE_GROUP.TYPE1}, ${COLOR.THEME.BLUE_GROUP.TYPE2}, ${COLOR.THEME.BLUE_GROUP.TYPE4}, ${COLOR.THEME.BLUE_GROUP.TYPE2}, ${COLOR.THEME.BLUE_GROUP.TYPE1})`}
>
  <div  class="title">
    <h1 class="text" style:color={COLOR.THEME.WHITE_GROUP.WHITE}>{MAIN.WELCOME}</h1>
  </div>
  <h1 class="title">
    {#each MAIN.TITLE  as item }
      <span style:color={COLOR.THEME.WHITE_GROUP.WHITE}>{item}</span>
    {/each}
  </h1>
</section>

<style>
  .main {
    width: 100%;
    height: 100vh;
    padding-top: 80px;
    position: relative;
  }

  h1 {
    font-size: 70px;
    letter-spacing: 1px;
    text-align: center;
  }

  p {
    font-size: 24px;
    text-align: center;
  }

  .text {
    opacity: 0;
    transform: translateY(20px);
  }

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .title span {
    opacity: 0;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 32px;
    }

    p {
      font-size: 24px;
    }
  }
</style>