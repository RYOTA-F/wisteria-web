<script lang="ts">
  import type {IconPettern} from '../types/icon'

  export let type: IconPettern
  const src = `./${type}.svg`
</script>

<div>
  <img src={src} alt="logo" class="logo" />
</div>

<style>
</style>