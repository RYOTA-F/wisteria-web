<script lang="ts">
  import CAREER from '../const/career'
</script>

<section id="career_summary" class="careerSummary">
  {#each CAREER.SUMMARY as item }
    <p class="description">{item}</p>
  {/each}
</section>

<style>
  .careerSummary {
    width: 100%;
    padding: 120px 10%;
    text-align: center;
    background-color: #f1f1f1;
  }

  .description {
    font-size: 16px;
    white-space: pre-wrap;
  }

  .description:not(:first-child) {
    margin-top: 10px;
  }
</style>