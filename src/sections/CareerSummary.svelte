<script lang="ts">
  /* Const */
  import CAREER from '@/const/sections/career'
  import COLOR from '@src/const/color'
</script>

<section
  id="career_summary"
  class="careerSummary"
  style:color={COLOR.THEME.WHITE_GROUP.WHITE}
  style:background={`linear-gradient(${COLOR.THEME.BLUE_GROUP.TYPE2}, ${COLOR.THEME.BLUE_GROUP.TYPE3}, ${COLOR.THEME.BLUE_GROUP.TYPE2})`}
>
  <div class="container">
    <h2 class="name">{CAREER.NAME}</h2>
    {#each CAREER.SUMMARY as items }
      <ul class="listContainer">
        {#each items as item }
          <li class="description">{item}</li>
        {/each}
      </ul>
    {/each}
  </div>
</section>

<style>
  .careerSummary {
    width: 100%;
    padding: 40px 0;
    text-align: left;
  }

  .name {
    font-size: 22px;
    font-weight: 700;
  }

  .container {
    margin-top: 20px;
    margin-left: 25%;
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

  @media screen and (min-width: 601px) and (max-width: 1019px) {
    .name {
      font-size: 18px;
    }

    .careerSummary {
      padding: 20px;
      text-align: center;
    }

    .container {
      margin-top: 20px;
      margin-left: 0;
    }

    .description {
      font-size: 14px;
      text-align: center;
    }
  }

  @media screen and (max-width: 1020px) {
    .name {
      font-size: 18px;
    }

    .careerSummary {
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
      font-size: 14px;
      text-align: center;
    }
  }
</style>