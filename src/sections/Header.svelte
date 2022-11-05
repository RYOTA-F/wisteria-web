<script lang="ts">
  import { MENU_LIST } from '../const/menu'
</script>

<section class="header">
  <div class="headerContainer">
    <div class="logoWrapper">
      <img src="./svelte.png" alt="logo" class="logo" />
    </div>
    <ul class="menuList">
      <li class="menuItem">
        <a href={MENU_LIST.MAIN.ID} class="menuLink">
          {MENU_LIST.MAIN.TITLE}
        </a>
      </li>
      <li class="menuItem">
        <a href={MENU_LIST.SERVICE.ID} class="menuLink">
          {MENU_LIST.SERVICE.TITLE}
        </a>
      </li>
      <li class="menuItem">
        <a href={MENU_LIST.CAREER.ID} class="menuLink">
          {MENU_LIST.CAREER.TITLE}
        </a>
      </li>
      <li class="menuItem">
        <a href={MENU_LIST.SKILL.ID} class="menuLink">
          {MENU_LIST.SKILL.TITLE}
        </a>
      </li>
      <li class="menuItem">
        <a href={MENU_LIST.BLOG.ID} class="menuLink">
          {MENU_LIST.BLOG.TITLE}
        </a>
      </li>
      <li class="menuItem">
        <a href={MENU_LIST.CONTACT.ID} class="menuLink">
          {MENU_LIST.CONTACT.TITLE}
        </a>
      </li>
    </ul>
  </div>
</section>

<style>
  .header {
    position: fixed;
    width: 100%;
    height: 80px;
    background-color: #fff;
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
    border-radius: 50%;
    height: 60px;
    width: 60px;
    padding: 5px;
    background-color: #f1f1f1;
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