<script lang="ts">
  import MAIN from '../const/main'
</script>

<section id="main" class="main">
  <p class="typewriter__text typewriter__animation" >
    {MAIN.WELCOME}
    <span class="siteName">{MAIN.TITLE}</span>
    {MAIN.EXCLAMATION}
  </p>
</section>

<style>
  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding-top: 80px;
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

  .siteName {
    color: #709dd8;
  }
  @keyframes typewriter{
    from{width: 0;}
    to{width: 24em;}
  }
  @keyframes blinkTextCursor{
    from{border-right-color: rgba(255,255,255,.75);}
    to{border-right-color: transparent;}
  }
</style>