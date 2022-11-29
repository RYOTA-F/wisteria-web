<script lang="ts">
	import SlideInNavigation from './SlideInNavigation.svelte';
  import HamburgerMenu from "./HamburgerMenu.svelte";

  import { HANBURGER_MENU } from '../../const/hamburgerMenu'
  import { SLIDE_IN_NAVIGATION } from '../../const/slideInNavigation'
  import { changeActiveClass } from '../../lib/vanilaJS/navigationClass'

  let isOpen = false

  const onClickTogggle = () => {
    changeActiveClass(isOpen, HANBURGER_MENU)
    changeActiveClass(isOpen, SLIDE_IN_NAVIGATION)
    isOpen = !isOpen
  }
</script>

<div class="globalNavigation">
  <div class="hamburgerMenuWrapper">
    <HamburgerMenu onClickTogggle={onClickTogggle} />
  </div>
  <SlideInNavigation  />
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