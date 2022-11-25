<script lang="ts">
  import CAREER from '../const/career'
</script>

<section id="career_summary" class="careerSummary">
  <h2 class="name">{CAREER.NAME}</h2>

  {#each CAREER.SUMMARY as items }
    <ul class="listContainer">
      {#each items as item }
        <li class="description">{item}</li>
      {/each}
    </ul>
  {/each}
</section>

<style>
  .careerSummary {
    width: 100%;
    padding: 40px 0;
    color: #fff;
    background-color: rgba(112,157,216,1);
    text-align: center;
  }

  .name {
    color: #fff;
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
</style>