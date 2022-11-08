<script lang="ts">
  import type {IconPettern} from '../types/icon'

  export let type: IconPettern
  const src = `icons/${type}.svg`
</script>

<div>
  <img src={src} alt="logo" />
</div>

<style>
</style>