<script lang="ts">
</script>

<h2 class="h2">
  <slot />
</h2>

<style>
  .h2 {
    font-size: 32px;
    font-weight: 700;
  }

  @media screen and (max-width: 600px) {
    .h2 {
      font-size: 24px;
    }
  }
</style>