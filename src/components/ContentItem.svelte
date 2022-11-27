<script lang="ts">
	import { string } from './../../node_modules/micromark/dev/lib/initialize/text.js';
  import Button from '../components/Button.svelte'

  export let href: string = ''
  export let buttonText: string = ''
  export let onClick: () => void = () => {}
</script>

<div class="contentItem">
  <slot />
  {#if buttonText}
    <div class="button">
      <Button href={href} onClick={ onClick } >{buttonText}</Button>
    </div>
  {/if}
</div>

<style>
  .contentItem {
    padding: 28px 40px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    background-color: #fff;
  }

  .button {
    margin-top: 8px;
  }

  @media screen and (max-width: 600px) {
    .contentItem {
      padding: 20px;
    }
  }
</style>