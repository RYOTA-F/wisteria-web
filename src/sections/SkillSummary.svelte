<script lang="ts">
  import { SKILL } from '../const/skill'
</script>

<section id="skill_summary" class="skillSummary">
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
    color: #fff;
    background-color: #709dd8;
    text-align: left;
  }

  .container {
    margin-top: 20px;
    margin-left: 25%;
  }

  .title {
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