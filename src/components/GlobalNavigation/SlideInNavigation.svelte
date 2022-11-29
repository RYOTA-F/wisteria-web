<script lang="ts">
	import { MENU } from './../../const/menu';
  import { SLIDE_IN_NAVIGATION } from '../../const/slideInNavigation'

  export let onClickTogggle: () => void
</script>

<nav id={SLIDE_IN_NAVIGATION.ID} class={SLIDE_IN_NAVIGATION.ID}>
  <div id="g-nav-list">
    <ul>
      {#each MENU as item }
        <li><a href={item.ID} on:click={onClickTogggle}>{item.TITLE}</a></li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  #g-nav {
    position:fixed;
    z-index: 5;
    top:0;
    right: -120%;
    width:100%;
    height: 100%;
    background:#709dd8;
    transition: all 0.6s;
  }

  #g-nav.active {
    right: 0;
  }

  #g-nav.active #g-nav-list{
    position: fixed;
    z-index: 5;
    width: 100%;
    height: 100vh;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  #g-nav ul {
    position: absolute;
    z-index: 5;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }

  #g-nav li{
    list-style: none;
    text-align: center;
  }

  #g-nav li a{
    color: #fff;
    text-decoration: none;
    padding: 10px;
    display: block;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: bold;
  }
</style>