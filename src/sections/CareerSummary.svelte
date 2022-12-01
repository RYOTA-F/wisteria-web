<script lang="ts">
  /* Const */
  import CAREER from '@/const/sections/career'
</script>

<section id="career_summary" class="careerSummary">
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
    color: #fff;
    background-color: #427bbf;
    text-align: left;
  }

  .name {
    color: #fff;
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

  @media screen and (max-width: 600px) {
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
</style>