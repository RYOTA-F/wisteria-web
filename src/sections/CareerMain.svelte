<script lang="ts">
  /* Components */
  import H2 from "@/components/H2.svelte";
  import H3 from "@/components/H3.svelte";
  import Icon from "@/components/Icon.svelte";
  /* Const */
  import CAREER from '@/const/sections/career'
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

              {#if item.ICONS.length}
                <div class="iconsContainer">
                  {#each item.ICONS as icon}
                    <div class="iconWrapper">
                      <Icon type={icon}/>
                    </div>
                  {/each}
                </div>
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
    padding: 60px 10% 100px;
    overflow: hidden;
    text-align: center;
  }

  .treeContainer {
    width: 100%;
    position: relative;
    text-align: left;
    float: left;
    padding: 20px 0.75rem 60px;
    margin-top: 40px;
  }

  .treeContainer:before {
    position: absolute;
    width: 3px;
    background: #427bbf;
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
    background: #427bbf;
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

  .iconsContainer {
    display: flex;
    align-items: center;
    margin-top: 8px;
    margin-left: 70px;
  }

  .iconWrapper {
    width: 30px;
    margin-left: 8px;
  }

  @media screen and (max-width: 600px) {
    .careerMain {
      padding: 40px 10px;
      text-align: center;
    }

    .treeContainer {
      padding: 20px 0 60px;
    }

    .treeContainer:before {
      margin-left: 15%;
    }

    .years {
      margin-left: 4px;
      font-size: 18px;
    }

    .itemContainer {
      margin-left: calc(15% + 8px);
    }

    .itemPoint {
      top: 6px;
    }

    .careerItem {
      margin-left: 15px;
    }

    .itemMonth {
      font-size: 16px;
    }

    .itemTitle {
      margin-top: 4px;
      margin-left: 10px;
      font-size: 16px;
    }

    .itemDescription {
      margin-left: 24px;
      font-size: 12px;
      line-height: 1.3;
    }

    .iconsContainer {
      flex-wrap: wrap;
      margin-left: 32px;
    }
  }
</style>