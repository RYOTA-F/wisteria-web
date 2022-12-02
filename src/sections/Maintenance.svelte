<script lang="ts">
  /* Const */
  import MAINTENANCE from "@src/const/sections/maintenance"
</script>

<section id="maintenance" class="maintenance">
  <div class="container">
    <span class="title">{MAINTENANCE.TITLE}</span>
  </div>
</section>

<style>
  .maintenance {
    width: 100vw;
    height: 100vh;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }


  @media(min-width: 1024px) {
    .title {
      font-size: 52px;
    }
  }

  @media(max-width: 480px) {
    .title {
      font-size: 24px;
    }
  }
</style>