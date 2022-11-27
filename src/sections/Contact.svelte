<script lang="ts">
  import H2 from "../components/H2.svelte";
  import H3 from "../components/H3.svelte";
  import Button from "../components/Button.svelte";
	import { CONTACT } from '../const/contact';

  // TODO: :GA
  const onClick = () => {}

</script>

<section id="contact" class="contact">
  <div class="contact__titleMain">
    <H3>{CONTACT.TITLE_SUB}</H3>
    <H2>{CONTACT.TITLE_MAIN}</H2>
  </div>
  <p class="contact__description">{CONTACT.DESCRIPTION}</p>
  <div class="contact__button">
    <Button onClick={onClick} href={CONTACT.FORM_URL} >
      <span class="contact__buttonText">{CONTACT.BUTTON_TEXT}</span>
    </Button>
  </div>
  <img src="icons/presentation.svg" alt="presentation" class="iconPresentation" />
  <img src="icons/contact.svg" alt="contact" class="iconContact" />
</section>

<style>
  .contact {
    width: 100%;
    padding: 100px 0 120px;
    text-align: center;
    background-color: rgba(241, 241, 241, 0.5);
    position: relative;
  }

  .contact__titleMain {
    line-height: 1.5;
  }

  .contact__description {
    margin-top: 32px;
    font-size: 20px;
    line-height: 1.5;
    white-space: pre-wrap;
  }

  .contact__button {
    margin-top: 10px;
  }

  .contact__buttonText{
    font-size: 20px;
  }

  .iconPresentation {
    position: absolute;
    height: 160px;
    top: 80px;
    left: 120px;
    z-index: -1;
  }

  .iconContact {
    position: absolute;
    width: 160px;
    bottom: 80px;
    right: 120px;
    z-index: -1;
  }
</style>