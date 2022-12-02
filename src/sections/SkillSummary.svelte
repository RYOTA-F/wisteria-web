<script lang="ts">
  /* Const */
  import { SKILL } from '@src/const/sections/skill'
  import COLOR from '@src/const/color'
</script>

<section
  id="skill_summary"
  class="skillSummary"
  style:color={COLOR.THEME.WHITE_GROUP.WHITE}
  style:background={`linear-gradient(${COLOR.THEME.BLUE_GROUP.TYPE2}, ${COLOR.THEME.BLUE_GROUP.TYPE3}, ${COLOR.THEME.BLUE_GROUP.TYPE2})`}
>
  <div class="container">
    <h2 class="title">{SKILL.TITLE}</h2>
    {#each SKILL.DESCRIPTION as items }
      <ul class="listContainer">
        {#each items as item }
          <li class="description">{item}</li>
        {/each}
      </ul>
    {/each}
  </div>
</section>

<style>
  .skillSummary {
    width: 100%;
    padding: 40px 0;
    text-align: left;
  }

  .container {
    margin-top: 20px;
    margin-left: 25%;
  }

  .title {
    font-size: 22px;
    font-weight: 700;
  }

  .listContainer:not(:first-child) {
    margin-top: 20px;
  }

  .description {
    font-size: 16px;
  }
  .description:not(:first-child) {
    margin-top: 8px;
  }

  @media screen and (max-width: 1020px) {
    .title {
      font-size: 18px;
    }

    .skillSummary {
      padding: 20px;
      text-align: center;
    }

    .container {
      margin-top: 20px;
      margin-left: 0;
    }

    .description {
      font-size: 14px;
      text-align: left;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1019px) {
    .description {
      text-align: center;
    }
  }
</style>