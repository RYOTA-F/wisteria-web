<script lang="ts">
  import Button from '../components/Button.svelte'

  export let onClick: () => void
</script>

<div class="contentItem">
  <Button onClick={onClick} >経歴を見てみる</Button>
</div>

<style>
  .contentItem {
    padding: 16px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
</style>