<script lang="ts">
  import Icon from "./Icon.svelte";

  export let text: string
</script>

<div class="careerItem">
  <Icon type="svelte" />
  {text}
</div>

<style>
  .careerItem {
    border-radius: 10px;
    padding: 16px 40px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

    text-align: center;
    align-items: center;
  }
</style>