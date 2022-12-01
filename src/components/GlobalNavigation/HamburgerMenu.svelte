<script lang="ts">
  /* Const */
  import { HANBURGER_MENU } from '@src/const/globalNavigation/hamburgerMenu'

  /* Props */
  export let onClickTogggle: () => void
</script>

<button on:click={onClickTogggle}>
  <div id={HANBURGER_MENU.ID} class={HANBURGER_MENU.ID}><span /><span /><span /></div>
</button>

<style>
  .hamburgerMenu{
    position: relative;
    background: #709dd8;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    z-index: 10;
  }

  .hamburgerMenu span{
    display: inline-block;
    transition: all .4s;
    position: absolute;
    left: 14px;
    height: 2px;
    border-radius: 5px;
    background: #fff;
    width: 45%;
  }

  .hamburgerMenu span:nth-of-type(1) {
    top:13px;
  }

  .hamburgerMenu span:nth-of-type(2) {
    top:19px;
  }

  .hamburgerMenu span:nth-of-type(3) {
    top:25px;
  }

  .hamburgerMenu span:nth-of-type(3)::after {
    content: "Menu";
    position: absolute;
    top: 5px;
    left: -4px;
    color: #fff;
    font-size: 0.4rem;
    text-transform: uppercase;
  }

  .hamburgerMenu.active span:nth-of-type(1) {
    top: 14px;
    left: 18px;
    transform: translateY(6px) rotate(-45deg);
    width: 30%;
  }

  .hamburgerMenu.active span:nth-of-type(2) {
    opacity: 0;
  }

  .hamburgerMenu.active span:nth-of-type(3){
      top: 26px;
      left: 18px;
      transform: translateY(-6px) rotate(45deg);
      width: 30%;
  }

  .hamburgerMenu.active span:nth-of-type(3)::after {
    content: "Close";
    transform: translateY(0) rotate(-45deg);
    top: 5px;
    left: 2px;
  }
</style>