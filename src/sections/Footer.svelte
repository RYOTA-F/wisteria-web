<script lang="ts">
  import { MENU_LIST } from "../const/menu";
</script>

<section class="footer">
  <ul class="footerMenu__list">
    <li class="footerMenu__item">
      <a href={MENU_LIST.MAIN.ID} class="footerMenu__link">
        {MENU_LIST.MAIN.TITLE}
      </a>
    </li>
    <li class="footerMenu__item">
      <a href={MENU_LIST.CAREER.ID} class="footerMenu__link">
        {MENU_LIST.CAREER.TITLE}
      </a>
    </li>
    <li class="footerMenu__item">
      <a href={MENU_LIST.SKILL.ID} class="footerMenu__link">
        {MENU_LIST.SKILL.TITLE}
      </a>
    </li>
    <li class="footerMenu__item">
      <a href={MENU_LIST.BLOG.ID} class="footerMenu__link">
        {MENU_LIST.BLOG.TITLE}
      </a>
    </li>
    <li class="footerMenu__item">
      <a href={MENU_LIST.CONTACT.ID} class="footerMenu__link">
        {MENU_LIST.CONTACT.TITLE}
      </a>
    </li>
  </ul>
  <p class="copy">© 2022 Wisteria Web</p>
</section>

<style>
  .footer {
    padding: 30px 0 0;
    color: #fff;
    background-color: #709dd8;
    text-align: center;
  }

  .footerMenu__list {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10%;
  }

  .footerMenu__item {
    padding: 0 15px;
    border-right: 1.5px solid #fff;
  }
  .footerMenu__item:first-child {
    border-left: 1.5px solid #fff;
  }

  .footerMenu__link {
    height: 100%;
    width: 100%;
  }

  .copy {
    padding: 24px 0;
  }
</style>