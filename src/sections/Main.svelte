<script lang="ts" type="module">
	import { onMount } from 'svelte';
  import MAIN from '../const/main'
  import { moveInWelcomeMessage } from '../lib/gsap/welcomeMessage'

  onMount(() => {
    moveInWelcomeMessage()
  })
</script>

<section id="main" class="main">
  <div  class="title">
    <h1 class="text">{MAIN.WELCOME}</h1>
    <p class="text">{MAIN.WELCOME_SUB}</p>
  </div>
  <h1 class="title">
    {#each MAIN.TITLE  as item }
      <span>{item}</span>
    {/each}
  </h1>
</section>

<style>
.main {
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  background-color: #709dd8;
  color: #fff;
  position: relative;
}

h1 {
  font-size: 70px;
  margin: 0;
  text-align: center;
  letter-spacing: 1px;
}

p {
  font-size: 24px;
  margin: 0;
  text-align: center;
}

.text {
  opacity: 0;
  transform: translateY(20px);
  color: #ffffff;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.title span {
  opacity: 0;
  color: #ffffff;
}
</style>