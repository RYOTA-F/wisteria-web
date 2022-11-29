<script lang="ts">
	import SlideInNavigation from './SlideInNavigation.svelte';
  import HamburgerMenu from "./HamburgerMenu.svelte";

  let isOpen = false
  const changeIsOpen = () => isOpen = !isOpen
</script>

<div class="globalNavigation">
  <div class="hamburgerMenuWrapper">
    <HamburgerMenu isOpen={isOpen} changeIsOpen={changeIsOpen} />
  </div>
  <SlideInNavigation isOpen={isOpen} />
</div>

<style>
  .globalNavigation {
    position: relative;
  }

  .hamburgerMenuWrapper {
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>