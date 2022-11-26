<script lang="ts">
  import { MENU } from '../const/menu'
  import PAGE from '../const/page';
</script>

<section class="header">
  <div class="headerContainer">
    <a href={PAGE.TOP.PATH}>
      <div class="logoWrapper">
        <img src="icons/react.svg" alt="logo" class="logo" />
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

</style>