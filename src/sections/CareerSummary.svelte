<script lang="ts">
  import CAREER from '../const/career'
  import H3 from '../components/H3.svelte';
</script>

<section id="career_summary" class="careerSummary">
  <H3>{CAREER.NAME}</H3>

  <div class="descriptionContainer">
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
    padding: 60px 20%;
    background-color: #f1f1f1;
  }

  .descriptionContainer {
    padding: 30px;
  }

  .listContainer:not(:first-child) {
    margin-top: 20px;
  }

  :not(:first-child)

  .description {
    font-size: 16px;
  }
  .description:not(:first-child) {
    margin-top: 8px;
  }
</style>