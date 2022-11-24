<script lang="ts">
  import { onMount } from "svelte"

  import H2 from "../components/H2.svelte";
  import H3 from "../components/H3.svelte";
  import CareerItem from "../components/CareerItem.svelte";
  import CAREER from '../const/career'
  // import { scrollIntoItem } from '../lib/gsap/scrollTorigger'

  // onMount(() => {
  //   CAREER.ITEMS.forEach((_, i) => {
  //     scrollIntoItem(`${CAREER.SCROLL_IN_CLASS_NAME}${i}`)
  //   })
  // })
</script>

<section id="career_main" class="careerMain">
  <H3>{CAREER.TITLE_SUB}</H3>
  <H2>{CAREER.TITLE_MAIN}</H2>

  <div class="treeContainer">
    {#each CAREER.ITEMS as YEARS}
      <span class="years">{YEARS.YEAR}</span>
      <ul>
        {#each YEARS.YEAR_ITEMS as item }
          <li class="itemContainer">
            <div class="itemPoint" />
            <div class="careerItem">
              <p class="itemMonth">{item.MONTH}</p>
              <p class="itemTitle">{item.TITLE}</p>
              {#if item.DESCRIPTIONS.length}
                {#each item.DESCRIPTIONS as description }
                  <p class="itemDescription">{description}</p>
                {/each}
              {/if}
            </div>
          </li>
        {/each}
      </ul>
    {/each}
  </div>

</section>

<style>
  .careerMain {
    padding: 100px 10%;
    overflow: hidden;
    padding-bottom: 200px;
    text-align: center;
  }

  .treeContainer {
    width: 100%;
    position: relative;
    text-align: left;
    float: left;
    overflow: hidden;
    padding: 20px 0.75rem 60px;
    margin-top: 40px;
  }

  .treeContainer:before {
    position: absolute;
    width: 3px;
    background: #709dd8;
    top: 0px;
    left: 0.75rem;
    margin-left: 30%;
    content: '';
    height: 100%;
  }

  .years {
    margin-left: 20%;
    font-size: 28px;
    font-weight: bold;
  }

  .itemContainer {
    display: flex;
    align-items: center;
    margin-left: calc(30% + 3.5px);
    position: relative;
  }
  .itemContainer:not(:first-child) {
    margin-top: 24px;
  }

  .itemPoint {
    position: absolute;
    top: 10px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #709dd8;
  }

  .careerItem {
    margin-left: 30px;
  }

  .itemMonth {
    font-size: 20px;
    font-weight: 600;
  }

  .itemTitle {
    margin-top: 8px;
    margin-left: 22px;
    font-size: 20px;
  }

  .itemDescription {
    margin-top: 8px;
    margin-left: 56px;
    color: #7b7b7b;
  }
</style>