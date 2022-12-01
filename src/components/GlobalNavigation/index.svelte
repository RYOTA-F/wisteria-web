<script lang="ts">
  /* Components */
	import SlideInNavigation from '@/components/GlobalNavigation/SlideInNavigation.svelte'
  import HamburgerMenu from "@/components/GlobalNavigation/HamburgerMenu.svelte";
  /* Const */
  import { HANBURGER_MENU } from '@/const/hamburgerMenu'
  import { SLIDE_IN_NAVIGATION } from '@/const/slideInNavigation'
  /* Libs */
  import { changeActiveClass } from '@/lib/vanilaJS/navigationClass'

  /* State */
  let isOpen = false

  /* Methods */
  /**
   * トグルクリックアクション
   */
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
  <SlideInNavigation onClickTogggle={onClickTogggle}  />
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