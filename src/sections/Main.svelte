<script lang="ts" type="module">
  import MAIN from '../const/main'

  import Particles from "svelte-particles";
  import { loadFull } from "tsparticles";

  let particlesConfig = {
      particles: {
          color: {
              value: "#000",
          },
          links: {
              enable: true,
              color: "#000",
          },
          move: {
              enable: true,
          },
      },
  };

  const onParticlesLoaded = (event: any) => {
      // const particlesContainer = event.detail.particles;
  };

  const particlesInit = async (engine: any) => {
      await loadFull(engine);
  };
</script>

<section id="main" class="main">
  <Particles
    id="tsparticles"
    options={particlesConfig}
    on:particlesLoaded={onParticlesLoaded}
    particlesInit={particlesInit}
  />
</section>

<style>
  .main {
    /* display: flex;
    align-items: center;
    justify-content: center; */
    width: 100%;
    max-height: 100vh;
    padding-top: 80px;
    background-color: #709dd8;
    color: #fff;
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