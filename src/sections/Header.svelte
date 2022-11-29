<script lang="ts">
  import GlobalNavigation from '../components/GlobalNavigation.svelte';

  import { MENU } from '../const/menu'
  import PAGE from '../const/page';
</script>

<section class="header">
  <div class="headerContainer">
    <a href={PAGE.TOP.PATH}>
      <div class="logoWrapper">
        <img src="favicon.svg" alt="logo" class="logo" />
      </div>
    </a>
    <ul class="menuList">
      {#each MENU as item}
        <li class="menuItem">
          <a href={item.ID} class="menuLink">
            {item.TITLE}
          </a>
        </li>
      {/each}
    </ul>
  </div>

  <div class="hamburgerMenu">
    <div class="hamburgerMenuWrapper">
      <GlobalNavigation />
    </div>
  </div>
</section>

<style>
  .header {
    position: fixed;
    width: 100%;
    height: 80px;
    background-color: rgb(255, 255, 255, 0.6);
    z-index: 100;
  }

  .headerContainer {
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 70%;
    margin: 0 auto;
  }

  .logoWrapper {
    height: 80px;
    width: 80px;
    padding: 10px;
    cursor: pointer;
  }

  .logo {
    height: 60px;
    width: 60px;
    padding: 5px;
  }

  .menuList {
    display: flex;
    justify-content: end;
    width: 70%;
    height: 100%;
    text-align: center;
    list-style-type: none;
    position: relative;
    user-select: none;
  }

  .menuItem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #000;
  }
  .menuItem:hover {
    cursor: pointer;
    color: #fff;
    background-color: #709dd8;
  }

  .menuLink {
    display: block;
    height: 100%;
    line-height: 80px;
    width: 100%;
    text-decoration: none;
    padding: 0 15px;
  }

  @media screen and (min-width: 600px) {
    .hamburgerMenu {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    .header {
      background-color: transparent;
    }
    .headerContainer {
      display: none;
    }

    .hamburgerMenu {
      position: relative;
    }

    .hamburgerMenuWrapper {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
</style>