<script lang="ts">
  /* Const */
  import { MENU } from "@/const/menu"
  import COLOR from "@src/const/color"
</script>

<section
  class="footer"
  style:color={COLOR.THEME.WHITE_GROUP.WHITE}
  style:background-color={COLOR.THEME.BLUE_GROUP.TYPE3}
>
  <ul class="footerMenu__list">
    {#each MENU as item}
      <li class="footerMenu__item">
        <a href={item.ID} class="footerMenu__link">
          {item.TITLE}
        </a>
      </li>
    {/each}
  </ul>
  <p class="copy">© 2022 Wisteria Web</p>
</section>

<style>
  .footer {
    padding: 30px 0 0;
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

  @media screen and (max-width: 600px) {
    .footer {
      padding: 20px 0 0;
    }

    .footerMenu__list {
      flex-wrap: wrap;
      padding: 0 10px;
    }

    .footerMenu__item {
      padding: 0 10px;
      font-size: 16px;
      margin-bottom: 10px;
    }

    .footerMenu__item:nth-child(4) {
      border-left: 1.5px solid #fff;
    }

    .copy {
      padding: 20px 0 10px;
    }
  }
</style>