<script lang="ts">
  /* Components */
  import H2 from "@/components/H2.svelte";
  import H3 from "@/components/H3.svelte";
  import Icon from "@/components/Icon.svelte";
  import ContentItem from "@/components/ContentItem.svelte";
  /* Const */
  import { SKILL_MAIN } from '@/const/skill'
</script>

<section id="skill_main" class="skillMain">
  <H3>{SKILL_MAIN.TITLE_SUB}</H3>
  <H2>{SKILL_MAIN.TITLE_MAIN}</H2>
  <ul class="itemContainer">
    {#each SKILL_MAIN.SKILL_ITEMS as item }
      <li class="listItem">
        <a href={item.URL} class="listLink" target="__brank">
          <ContentItem>
            <div class="iconContainer">
              <Icon type={item.ICON} />
            </div>
            <div class="textContainer">
              <h3 class="text">{item.TEXT}</h3>
            </div>
          </ContentItem>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style>
  .skillMain {
    padding: 60px 20% 100px;
    overflow: hidden;
    text-align: center;
  }

  .itemContainer {
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
    margin-top: 40px;
  }

  .listItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 30px;
    margin-bottom: 60px;
  }

  .iconContainer {
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }

  .textContainer {
    margin-top: 28px;
  }

  .text {
    color: #7b7b7b;
    font-size: 14px;
    font-weight: 700;
  }

  @media screen and (max-width: 600px) {
    .skillMain {
      padding: 40px 0;
    }

    .itemContainer {
      margin-top: 20px;
    }

    .listItem {
      margin-left: 0;
      margin-top: 0;
      margin-bottom: 20px;
      width: 50%;
      text-align: center;
    }

    .listLink {
      width: 100%;
      padding: 0 10px;
    }

    .textContainer {
      margin-top: 20px;
    }
  }
</style>