<script lang="ts">
</script>

<h3 class="h3">
  <slot />
</h3>

<style>
  .h3 {
    color: #7b7b7b;
    font-size: 18px;
    font-weight: 700;
  }

  @media screen and (max-width: 600px) {
    .h3 {
      font-size: 16px;
    }
  }
</style>