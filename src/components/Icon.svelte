<script lang="ts">
  /* Types */
  import type { IconPettern } from '@/types/icon'

  /* Props */
  export let type: IconPettern

  const src = `icons/${type}.svg`
</script>

<div>
  <img src={src} alt={type} />
</div>

<style>
</style>