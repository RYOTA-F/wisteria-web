<script lang="ts" type="module">
	import { onMount } from 'svelte'
  /* Const */
  import MAIN from '@src/const/sections/main'
  import COLOR from '@src/const/color'
  import { MENU_LIST } from '@src/const/menu'
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

  <div class="scroll">
    <a href={MENU_LIST.ABOUT.ID} class="scrollDown"><span>{MAIN.SCROLL}</span></a>
  </div>
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

  .scroll {
    opacity: 0;
  }

  /*スクロールダウン全体の場所*/
  .scrollDown{
    display: block;
    position: absolute;
    bottom: 1%;
    right:50%;
    animation: arrowmove 1s ease-in-out infinite;
    cursor: pointer;
  }

  /*下からの距離が変化して全体が下→上→下に動く*/
  @keyframes arrowmove{
    0%{bottom:1%;}
    50%{bottom:3%;}
    100%{bottom:1%;}
  }

  /*Scrollテキストの描写*/
  .scrollDown span{
    /*描画位置*/
    position: absolute;
    left:-20px;
    bottom:10px;
    /*テキストの形状*/
    color: #eee;
    font-size: 0.7rem;
    letter-spacing: 0.05em;
    /*縦書き設定*/
    -ms-writing-mode: tb-rl;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
  }

  /* 矢印の描写 */
  .scrollDown:before {
    content: "";
    /*描画位置*/
    position: absolute;
    bottom: 0;
    right: -6px;
    /*矢印の形状*/
    width: 1px;
    height: 20px;
    background: #eee;
    transform: skewX(-31deg);
  }

  .scrollDown:after{
    content:"";
    /*描画位置*/
    position: absolute;
    bottom:0;
    right:0;
    /*矢印の形状*/
    width:1px;
    height: 50px;
    background:#eee;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 32px;
    }
  }
</style>