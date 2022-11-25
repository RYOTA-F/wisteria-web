<script lang="ts" type="module">
	import { onMount } from 'svelte';
  import MAIN from '../const/main'

  import { gsap } from 'gsap'

  onMount(() => {

    gsap.to(".background-color", {
      duration: 1, //アニメーションの時間の設定
      opacity: 1, //表示状態の指定
    });

    //.textを1.5秒かけ出現させ1.5秒かけ逆再生させ初期状態に戻す
    gsap.to(".text", {
      delay: 1, //アニメーションの初期遅延（アニメーションが開始されるまでの指定）
      duration: 1, //アニメーションの時間の設定
      opacity: 1, //表示状態の指定
      y: "0px", //cssでY軸-20pxから完了時0pxへの指定
      yoyo: true, //trueにすることで上記で指定したY軸の動きの逆再生
      repeat: 1, //yoyoのリピート回数
      //同じclass名のバリデーションの設定
      stagger: {
        each: 0.5, //ディレイ時間
      },
    });

    //初期遅延3.5秒かけてから.titleを表示
    gsap.to(".title span", {
      delay: 3.5, //アニメーションの初期遅延（アニメーションが開始されるまでの指定）
      duration: 1.5, //アニメーションの時間の設定
      opacity: 1, //表示状態の指定
      //同じclass名のバリデーションの設定
      stagger: {
        each: 0.2, //ディレイ時間
        from: "start", //出現方法の指定
      },
    });
  })
</script>

<section id="main" class="main">
  <!-- <p class="typewriter__text typewriter__animation" >
    {MAIN.WELCOME}
    <span class="siteName">{MAIN.TITLE}</span>
    {MAIN.EXCLAMATION}
  </p> -->
  <h1 class="text">CREATE PLAY ENJOY</h1>
    <p class="text">作って、遊んで、楽しむ</p>
    <h1 class="title">
      <span>T</span>
      <span>O</span>
      <span>K</span>
      <span>O</span>
      <span>S</span>
      <span>&nbsp</span>
      <span>i</span>
      <span>n</span>
      <span>c</span>
      <span>.</span>
    </h1>
</section>

<style>
  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding-top: 80px;
    background-color: #709dd8;
    color: #fff;
  }

  .text-area {
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 50px;
  margin: 0;
  text-align: center;
  letter-spacing: 1px;
}

p {
  font-size: 16px;
  margin: 0;
  text-align: center;
}

.background-color {
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 0;
  position: relative;
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

  .typewriter__text{
    position: relative;
    border-right: 2px solid rgba(255,255,255,.75);
    font-size: 70px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);
  }

  /* Animation */
  .typewriter__animation{
    animation: typewriter 4s steps(44) 1s 1 normal both,
    blinkTextCursor 500ms steps(44) infinite normal;
  }

  /* .siteName {
    color: #709dd8;
  } */
  @keyframes typewriter{
    from{width: 0;}
    to{width: 24em;}
  }
  @keyframes blinkTextCursor{
    from{border-right-color: rgba(255,255,255,.75);}
    to{border-right-color: transparent;}
  }
</style>